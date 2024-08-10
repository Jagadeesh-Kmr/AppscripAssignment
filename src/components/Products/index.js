import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'

import DisplayProducts from '../DisplayProducts'
import './index.css'

import {
  ProductsMainContainer,
  LoadingViewContainer,
  ErrorMessage,
  ProductsUl,
  NoOfItemsP,
  RecommendedSelect,
  RecommendedDiv,
  RecommendedOptions,
  RenderProductsDiv,
  CustomizeInput,
  CustomizeLabel,
  FilterHr,
  HideFilterBtn,
  FilterSelect,
  FilterOptions,
  FilterLabel,
  FilterDiv,
  FilterMobileView,
  FilterH2,
  RecommendedMobileSelect,
  RecommendedMobileOptions,
  FilterMobileHr,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const Products = () => {
  const [apiResponse, setApiResponse] = useState({
    status: apiStatusConstants.initial,
    data: null,
    errorMsg: null,
  })
  const [toggleFilter, setToggleFilter] = useState(false)

  const customize = toggleFilter ? 'customize-hide-div' : 'customize-div'

  const filterName = toggleFilter ? 'SHOW FILTER' : 'HIDE FILTER'

  const getProductsData = async () => {
    setApiResponse({
      status: apiStatusConstants.inProgress,
      data: null,
      errorMsg: null,
    })

    const url = 'https://fakestoreapi.com/products?limit=12'

    const response = await fetch(url)
    if (response.ok === true) {
      const fetchedData = await response.json()
      if (response.ok) {
        setApiResponse(prevApiDetails => ({
          ...prevApiDetails,
          status: apiStatusConstants.success,
          data: fetchedData,
        }))
      } else {
        setApiResponse(prevApiDetails => ({
          ...prevApiDetails,
          status: apiStatusConstants.failure,
          errorMsg: fetchedData.error_msg,
        }))
      }
    }
  }

  const renderSuccessView = () => {
    const {data} = apiResponse
    const updatedData = data.map(eachData => ({
      title: eachData.title,
      id: eachData.id,
      category: eachData.category,
      image: eachData.image,
    }))
    return (
      <ProductsUl>
        {updatedData.map(eachData => (
          <DisplayProducts key={eachData.id} productsData={eachData} />
        ))}
      </ProductsUl>
    )
  }

  useEffect(() => {
    getProductsData()
  }, [])

  const renderFailureView = () => {
    const {errorMsg} = apiResponse
    return <ErrorMessage>{errorMsg}</ErrorMessage>
  }

  const renderLoadingView = () => (
    <LoadingViewContainer>
      <Loader type="ThreeDots" color="#202020" height="50" width="50" />{' '}
    </LoadingViewContainer>
  )

  const renderFilterOptions = () => (
    <>
      <FilterLabel htmlFor="filter">IDEAL FOR</FilterLabel>
      <FilterSelect id="filter">
        <FilterOptions>All</FilterOptions>
        <FilterOptions>Men</FilterOptions>
        <FilterOptions>Women</FilterOptions>
        <FilterOptions>Baby & Kids</FilterOptions>
      </FilterSelect>
      <FilterHr />
      <FilterLabel htmlFor="filter">OCCASION</FilterLabel>
      <FilterSelect id="filter">
        <FilterOptions>All</FilterOptions>
        <FilterOptions>Casual</FilterOptions>
      </FilterSelect>
      <FilterHr />
      <FilterLabel htmlFor="filter">WORK</FilterLabel>
      <FilterSelect id="filter">
        <FilterOptions>All</FilterOptions>
        <FilterOptions>Formal</FilterOptions>
        <FilterOptions>Regular</FilterOptions>
      </FilterSelect>
      <FilterHr />
      <FilterLabel htmlFor="filter">FABRIC</FilterLabel>
      <FilterSelect id="filter">
        <FilterOptions>All</FilterOptions>
        <FilterOptions>Cotton</FilterOptions>
        <FilterOptions>Lenin</FilterOptions>
      </FilterSelect>
      <FilterHr />
      <FilterLabel htmlFor="filter">SEGMENT</FilterLabel>
      <FilterSelect id="filter">
        <FilterOptions>All</FilterOptions>
        <FilterOptions>Occasion</FilterOptions>
        <FilterOptions>Regular</FilterOptions>
      </FilterSelect>
      <FilterHr />
      <FilterLabel htmlFor="filter">SUITABLE FOR</FilterLabel>
      <FilterSelect id="filter">
        <FilterOptions>All</FilterOptions>
        <FilterOptions>Regular</FilterOptions>
        <FilterOptions>Occasion</FilterOptions>
      </FilterSelect>
      <FilterHr />
      <FilterLabel htmlFor="filter">RAW MATERIALS</FilterLabel>
      <FilterSelect id="filter">
        <FilterOptions>All</FilterOptions>
        <FilterOptions>Denim</FilterOptions>
        <FilterOptions>Formal</FilterOptions>
      </FilterSelect>
      <FilterHr />
      <FilterLabel htmlFor="filter">PATTERN</FilterLabel>
      <FilterSelect id="filter">
        <FilterOptions>All</FilterOptions>
        <FilterOptions>Solid</FilterOptions>
        <FilterOptions>Printed</FilterOptions>
        <FilterOptions>Checked</FilterOptions>
      </FilterSelect>
      <FilterHr />
    </>
  )

  const renderProducts = () => {
    const {status} = apiResponse

    switch (status) {
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      case apiStatusConstants.success:
        return renderSuccessView()
      case apiStatusConstants.failure:
        return renderFailureView()
      default:
        return null
    }
  }

  return (
    <ProductsMainContainer>
      <FilterMobileView>
        <FilterH2>FILTER</FilterH2>
        <FilterMobileHr />
        <RecommendedMobileSelect id="mobile-select">
          <RecommendedMobileOptions>RECOMMENDED</RecommendedMobileOptions>
          <RecommendedMobileOptions>POPULAR</RecommendedMobileOptions>
          <RecommendedMobileOptions>
            PRICE : HIGH TO LOW
          </RecommendedMobileOptions>
          <RecommendedMobileOptions>
            PRICE : LOW TO HIGH
          </RecommendedMobileOptions>
        </RecommendedMobileSelect>
      </FilterMobileView>

      <FilterDiv>
        <div className="hide-filter-div">
          <NoOfItemsP>3425 Items</NoOfItemsP>
          <HideFilterBtn
            type="button"
            onClick={() => setToggleFilter(!toggleFilter)}
          >
            {'<    '}
            {filterName}
          </HideFilterBtn>
        </div>
        <RecommendedDiv>
          <RecommendedSelect id="recommended">
            <RecommendedOptions>RECOMMENDED</RecommendedOptions>
            <RecommendedOptions>NEWEST FIRST</RecommendedOptions>
            <RecommendedOptions>POPULAR</RecommendedOptions>
            <RecommendedOptions>PRICE : HIGH TO LOW</RecommendedOptions>
            <RecommendedOptions>PRICE : LOW TO HIGH</RecommendedOptions>
          </RecommendedSelect>
        </RecommendedDiv>
      </FilterDiv>

      <RenderProductsDiv>
        <div className={customize}>
          <CustomizeInput id="checkbox" type="checkbox" />
          <CustomizeLabel htmlFor="checkbox">Customizble</CustomizeLabel>
          <FilterHr />
          {renderFilterOptions()}
        </div>
        <div>{renderProducts()}</div>
      </RenderProductsDiv>
    </ProductsMainContainer>
  )
}

export default Products
