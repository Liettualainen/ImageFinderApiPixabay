import { Component } from "react";
import {
  HeaderSearchbar, FormSearchbar, ButtonSearchbar,
  InputSearchbar, ButtonLabelSearchbar, SelectNumber
} from "./Styles.js";
import search from './search.svg'
import { Loader } from './Loader.js'
import { getPictures } from './Api.js'
import { ImageGallery } from "./ImageGallery.js";
import { ButtonLoadMore } from './ButtonLoadMore.js'


const DEFAULT_STATE = {
  perPage: 3,
  searchImage: "Platoon",
  isLoading: false,
              
}
  
export class Searchbar extends Component {
  state = {
      perPage: 3,
  searchImage: "Platoon",
  isLoading: false,
      pictures: [],
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    console.log("name of state", evt.target.name, evt.target.value);
    this.setState({ [name]: value }) 
        this.setState(this.state, () => { console.log(this.state) })
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const response = await getPictures(this.state.searchImage, this.state.perPage);
      this.setState({ pictures: response.data.hits, isLoading: false, });
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  
    
  }

  render() {
        const { pictures, isLoading, perPage} = this.state;
    return (
<div>
          <HeaderSearchbar>
  <FormSearchbar>
      <ButtonSearchbar type="submit">
      <ButtonLabelSearchbar><img src = {search} width="20" alt="SVG"/></ButtonLabelSearchbar>
    </ButtonSearchbar>

            <InputSearchbar
              name="searchImage"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
            />
          </FormSearchbar>
          <SelectNumber  id="select" name="perPage" value={perPage} onChange={this.handleChange}>
            <option value="" >Please choose number </option>            
            <option value="12">12 pictures</option>
            <option value="24">24 pictures</option>
            <option value="36">36 pictures</option>
          </SelectNumber>
          
      </HeaderSearchbar>
        <div>
        {isLoading && <Loader />}
          {
            pictures.length > 0 ? <>
              <ImageGallery pictures={pictures} />
              <ButtonLoadMore />
            </> : null 
          }
     
      </div>
</div>
    )
}
}
  






