import styled from 'styled-components';

// Searchbar styles 
export const HeaderSearchbar = styled.header `
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 gap: 20px;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  width: 100%;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

export const FormSearchbar = styled.form`
  display: flex;
  align-items: center;
  min-width: 500px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`
export const ButtonSearchbar = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
//   background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
    &:hover {
   opacity: 1;
 }
`
export const ButtonLabelSearchbar = styled.span`
//   position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
//   clip-path: inset(50%);
  border: 0;
`

export const InputSearchbar = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 14px;
  padding-right: 4px;
//   margin-left: 10px;
  &::placeholder {
  font: inherit;
  font-size: 22px;
}
`
export const SelectNumber = styled.select`
padding-left: 10px;
  width: 360px;
  height: 50px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
    font: inherit;
    font-size:20px;
    color: grey;
    font-weight: 500;
`


export const ButtonLoadmore = styled.button`
margin-top: 20px;
width: 200px;
height: 50px;
  font-size: 25px;
color: white;
background-color: #303f9f;
  border-radius: 5px;
  border: 1px solid black;
`

export const EroorPage = styled.div `
//  display: flex;
//  flex-direction: row;
//  flex-wrap: wrap;
//  gap: 120px;
  // top: 0;
  // left: 0;
  // position: sticky;
  // z-index: 1100;
  // display: flex;
  margin-top: 200px;
  justify-content: center;
  align-items: center;
  // min-height: 64px;
   width: 640px;
    margin-right: auto;
        margin-left: auto;
  padding-right: 12px;
  padding-left: 12px;
  padding-top: 32px;
  padding-bottom: 32px;
  font-size: 40px;
  color: red;
  background-color: yellow;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`
