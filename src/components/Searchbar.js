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
import { Eroor } from './Error.js'



const DEFAULT_STATE = {
  perPage: 3,
  searchImage: "Platoon",
  isLoading: false,
              
}
  
export class Searchbar extends Component {
  state = {
      perPage: 12,
  searchImage: "Leaf",
  isLoading: false,
    pictures: [],
    error: null,
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
      this.setState({ error: "gbpltwm" , isLoading: false})
    // <Eroor/>
    }
  }

  render() {
    const { pictures, isLoading, perPage, error } = this.state;
    const handleChange = this.handleChange
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
              onChange={handleChange}
            />
          </FormSearchbar>
          <SelectNumber  id="select" name="perPage" value={perPage} onChange={handleChange}>
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
        {error && <Eroor/>}
</div>
    )
}
}
  






