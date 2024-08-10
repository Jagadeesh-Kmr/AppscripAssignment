import styled from 'styled-components'

export const ProductsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1138px;
  top: 652px;
  left: 96px;
  gap: 0px;
  padding-top: 0px;
  margin-top: 0px;
  margin-bottom: 140px;
  @media screen and (max-width: 768px) {
    width: 314px;
    margin-bottom: 2980px;
  }
`

export const LoadingViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`

export const ErrorMessage = styled.p`
  font-family: 'Roboto';
  font-size: 32px;
  color: #ffffff;
  margin: 0px;
  margin-top: 100px;
  text-align: center;
`
export const FilterMobileView = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 408px;
  gap: 0px;
  border-top: 1px solid #888792;
  border-bottom: 1px solid #888792;
  opacity: 0px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const FilterH2 = styled.h2`
  font-family: Simplon Norm;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.8px;
  text-align: left;
  color: #252020;
  margin-left: 88px;
`

export const RecommendedMobileSelect = styled.select`
  width: 148px;
  height: 18px;
  top: 264px;
  left: 223px;
  gap: 4px;
  opacity: 0px;
  border: 0px;
  font-family: Simplon Norm;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.8px;
  text-align: left;
  color: #252020;
`
export const FilterMobileHr = styled.hr`
  width: 0px;
  height: 20px;
  color: #888792;
  margin-left: 0px;
  margin-right: 0px;
`

export const RecommendedMobileOptions = styled.option`
  font-size: 10px;
  font-weight: 500;
  text-align: left;
  border: 0px;
  cursor: pointer;
`

export const ProductsUl = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 1132px;
  height: 1082px;
  top: 652px;
  left: 412px;
  gap: 0px;
  opacity: 0px;
  @media screen and (max-width: 768px) {
    width: 380px;
  }
`

export const HideFilterBtn = styled.button`
  width: Hug (130px) px;
  height: Hug (40px) px;
  gap: 8px;
  opacity: 1px;
  font-family: Adobe Caslon Pro;
  font-size: 16px;
  font-weight: 400;
  line-height: 40px;
  text-align: right;
  color: #888792;
  border: 0px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`

export const NoOfItemsP = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 40px;
  text-align: left;
  color: #252020;
`
export const RecommendedDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 148px;
  height: 40px;
  gap: 0px;
  opacity: 1px;
  margin: 10px 0px 10px 0px;
`

export const RecommendedSelect = styled.select`
  border: 0px;
  background-color: transparent;
  outline: none;
  color: #252020;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`
export const RecommendedOptions = styled.option`
  font-size: 15px;
  font-weight: 500;
  text-align: left;
  border: 0px;
  cursor: pointer;
`

export const RenderProductsDiv = styled.div`
  display: flex;
  justify-content: space-around;
`

export const CustomizeLabel = styled.label`
  font-size: 18px;
  font-weight: 700;
  line-height: 21.6px;
  text-align: left;
`

export const CustomizeInput = styled.input`
  width: 22px;
  height: 22px;
  gap: 0px;
  border: 0.92px 0px 0px 0px;
  opacity: 0px;
`
export const FilterHr = styled.hr`
  width: 198px;
  height: 0px;
  gap: 0px;
  border: 1px 0px 0px 0px;
  margin-bottom: 40px;
  opacity: 0px;
  color: #e5e5e5;
`

export const FilterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1308px;
  height: 80px;
  top: 532px;
  left: 96px;
  gap: 0px;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  opacity: 1px;
  padding: 10px;
  font-family: 'Roboto';
  margin-top: 100px;
  margin-bottom: 0px;
  padding-bottom: 0px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Input = styled.input`
  width: Fill (300px) px;
  height: Hug (52px) px;
  gap: 8px;
  opacity: 0px;
`
export const FilterLabel = styled.label`
  font-family: Simplon Norm;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.6px;
  text-align: left;
  color: #252020;
`

export const FilterSelect = styled.select`
  display: flex;
  flex-direction: space-between;
  width: 195px;
  border: 0px;
  background-color: transparent;
  outline: none;
  color: #252020;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  cursor: pointer;
`
export const FilterOptions = styled.option`
  font-size: 15px;
  font-weight: 500;
  text-align: left;
  border: 0px;
  background: none;
  cursor: pointer;
`
