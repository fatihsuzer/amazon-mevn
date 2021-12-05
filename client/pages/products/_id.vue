<template>
  <main>
    <!-- Breadcrumbs -->
    <div class="a-spacing-top-medium"></div>
    <div class="container-fluid">
      <div class="wayfinding-breadcrumbs-container">
        <ul class="a-unordered-lists a-horizontal a-size-small">
          <li>
            <span class="a-list-item">
              <a class="a-link-normal a-color-tertiary" href="#"> Category</a>
            </span>
          </li>
          <li>
            <span class="a-list-item">></span>
          </li>
          <li>
            <span class="a-list-item">
              <a class="a-link-normal a-color-tertiary" href="#"> Title</a>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="container-fluid">
      <div class="dp-container">
        <div class="row">
          <!-- First 3 grid// Product img and author section -->
          <div class="col-lg-3 col-md-3 col-sm-4">
            <div class="leftCol">
              <!-- Image -->
              <div class="imgBlock">
                <div class="eBooksimg">
                  <img src="/img/xcase.jpg" class="img-fluid" />
                </div>
              </div>
              <!-- Follow author -->
              <div class="authorFollow">
                <hr class="a-divider-normal" />
                <h1 class="authorFollowHeading">Follow the author</h1>
                <div class="a-spacing-top-small">
                  <div class="row">
                    <!-- Author's img -->
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                      <div class="smallAuthorImageContainer">
                        <a href="#">
                          <img src="/img/xcase.jpg" class="img-fluid" />
                        </a>
                      </div>
                    </div>
                    <!-- Author's name -->
                    <div class="col-xl-4 col-lg-3 col-md-3 col-sm-3 col-3">
                      <div class="authorNameCol">
                        <a href="#"> Walter Isaacson</a>
                      </div>
                    </div>
                    <!-- Author's follow btn -->
                    <div class="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-6">
                      <div class="authorBtn mt-2">
                        <a href="#">
                          <span class="btnFollow">
                            <span class="a-btn-inner">
                              <button class="a-btn-text">+Follow</button>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Middle 6 grid - description-->
          <div class="col-lg-6 col-md-6 col-sm-8">
            <div class="centerCol">
              <!-- product title -->
              <div class="titleDiv">
                <h1 class="productTitle">
                  <span class="largeTitle">Kill bill</span>
                  <span class="smallTitle">PaperBack</span>
                </h1>
              </div>
              <!-- author's name -->
              <div class="bylineinfo">
                by
                <a href="#" class="authorName"
                  >JK Rowling
                  <i
                    class="fas fa-chevron-down"
                    style="font-size: 8px !important; color: #555 !important"
                  ></i>
                </a>
                (Author)
              </div>
              <div class="reviewGroup"></div>
              <hr style="margin-top: 10px" />
              <!-- A tags dumy data -->
              <div class="mediaMatrix">
                <div class="formats">
                  <a href="#" class="link-expander">
                    >
                    <span class="tmmShowPrompt"
                      >See all 18 formats and editions</span
                    >
                  </a>
                  <ul>
                    <!-- Kindle -->
                    <li class="swatchElement" style="width: 117px">
                      <span class="a-list-item">
                        <span class="a-button-toggle">
                          <span class="a-button-inner">
                            <a href="#" class="a-button-text">
                              <span>Kindle</span>
                              <br />
                              <span class="a-color-secondary">-</span>
                            </a>
                          </span>
                        </span>
                        <span class="tmm-olp-links"></span>
                        <span class="tmm-olp-links">
                          <a href="#" class="a-size-mini">
                            <span class="kcAppBox">
                              <span class="a-declarative">
                                Read with Our
                                <span class="a-text-bold">Free app</span>
                              </span>
                            </span>
                          </a>
                        </span>
                      </span>
                    </li>
                    <!-- Audible -->
                    <li class="swatchElement" style="width: 117px">
                      <span class="a-list-item">
                        <span class="a-button-toggle">
                          <span class="a-button-inner">
                            <a href="#" class="a-button-text">
                              <span
                                ><img
                                  src="/img/audibleLogo.png"
                                  class="img-fluid"
                                  style="width: 20px"
                              /></span>
                              <br />
                              <span class="a-color-secondary">-</span>
                            </a>
                          </span>
                        </span>
                        <span class="tmm-olp-links"></span>
                        <span class="tmm-olp-links">
                          <a href="#" class="a-size-mini">
                            <span class="kcAppBox">
                              <span class="a-declarative">
                                <span class="a-text-bold">Free app</span> with
                                your Audible Trial
                              </span>
                            </span>
                          </a>
                        </span>
                      </span>
                    </li>
                    <!-- Paperback -->
                    <li class="swatchElement" style="width: 117px">
                      <span class="a-list-item">
                        <span class="a-button-toggle">
                          <span class="a-button-inner">
                            <a href="#" class="a-button-text">
                              <span>PaperBack</span>
                              <br />
                              <span class="a-color-secondary">-</span>
                            </a>
                          </span>
                        </span>
                        <span class="tmm-olp-links"></span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- Description -->
              <div class="bookDescription">
                <div class="bookDescriptionInner">Book's description text</div>
              </div>
              <!-- Product specification -->
              <div class="aboutEbooksFeature">
                <hr />
                <div class="row">
                  <div class="col-sm-4 mb-1">
                    <div class="a-declarative">
                      Length:
                      <span
                        ><a href="#">
                          386 pages <i class="a-icon a-icon-popover"></i></a
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 3 grid - buying section -->
          <div class="col-lg-3 col-md-3 col-sm-6">
            <div class="combinedBuyBox">
              <div class="buyBox">
                <div class="a-section">
                  <div class="clearfix">
                    <div class="float-left">
                      <form>
                        <input
                          type="radio"
                          id="test1"
                          name="radio-group checked"
                        />
                        <label for="test1">Buy now</label>
                      </form>
                    </div>
                    <!-- Product price -->
                    <div class="float-right">
                      <span
                        class="
                          a-size-medium a-color-price
                          offer-price
                          a-text-normal
                        "
                      >
                        $39
                      </span>
                    </div>
                  </div>
                </div>
                <div class="a-section a-spacing-none">
                  <div class="row">
                    <div class="col-sm-5 col-5">
                      <select name>
                        <option value="1">Qty: &nbsp;1</option>
                        <option value="2">Qty: &nbsp;2</option>
                        <option value="3">Qty: &nbsp;3</option>
                        <option value="4">Qty: &nbsp;4</option>
                        <option value="5">Qty: &nbsp;5</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="a-section a-spacing-small a-spacing-top-micro">
                  <div class="row">
                    <span class="a-color-base buyboxShippingLabel"></span>
                  </div>
                </div>
                <div class="a-section a-spacing-small">
                  <div class="a-section a-spacing-none">
                    <span class="a-size-medium a-color-success">In stock</span>
                  </div>
                  <div class="a-section a-spacing-mini">
                    Ships from and sold by Amazon
                  </div>
                </div>
                <div class="a-section">
                  <div class="a-button-stack">
                    <span
                      class="a-spacing-small a-button-primary a-button-icon"
                    >
                      <span class="a-button-inner">
                        <i class="a-icon a-icon-cart"></i>
                        <input
                          type="submit"
                          name="submit.add-to-cart"
                          class="a-button-input"
                        />
                        <span class="a-button-text">Add to Cart</span>
                      </span>
                    </span>
                  </div>
                  <div class="a-button-stack">
                    <span
                      class="a-spacing-small a-button-primary a-button-icon"
                    >
                      <span class="a-button-inner">
                        <i class="a-icon a-icon-buynow"></i>
                        <input
                          type="submit"
                          name="submit.add-to-cart"
                          class="a-button-input"
                        />
                        <span class="a-button-text">Buy Now</span>
                      </span>
                    </span>
                  </div>
                </div>
                <div class="a-row">
                  <div class="a-spacing-top-small">
                    <div class="a-section a-spacing-none">
                      <div class="a-section a-spacing-none a-spacing-top-mini">
                        This item ships to
                        <b>California</b>
                        <b>Get it by Monday, December 6 - Monday, Dec. 7</b>
                        Choose this date at checkout
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <span class="a-declarative">
                  <a href="#" class="a-link-normal">
                    <div class="a-row a-spacing-mini">
                      <i class="fal fa-map-market-alt"></i>
                      <span class="a-size-small">Deliver to California</span>
                    </div>
                  </a>
                </span>
                <br />
                <hr />
                <div class="a-section">
                  <div class="clearfix">
                    <div class="float-left">
                      <form>
                        <input type="radio" id="test2" name="radio-group" />
                        <label for="test1"> Buy now</label>
                      </form>
                    </div>
                    <div class="float-right">
                      <span class="a-color-base offer-price a-text-normal"
                        >$25</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="kcpAppBaseBox text-center">
              <img src="/img/readyondevice.png" class="img-fluid" />
            </div>
          </div>
        </div>
        <br/>
        <hr/>
        <div class="books-entity-teaser">
          <div class="bucket">
            <h2>More about the author</h2>
            <div class="content">
              <div class="row">
                <!-- Author's photo and button -->
                <div class="col-md-2 col-sm-4 col-4">
                  <div class="authorContent">
                    <div class="authorImageSingle">
                      <a href="#">
                        <img src="/img/xcase.jpg" class="img-fluid"/>
                      </a>
                    </div>
                    <div class="authorFollow">
                      <button class="followButton" type="button">
                        <span class="pr-fb-icon"></span>
                        <span class="pr-fb-text">Follow</span>
                      </button>
                    </div>
                  </div>
                </div>
                <!-- Author's about  -->
                <div class="col-md-10 col-sm-8 col-8 pl-0">
                  <div class="mainContent">
                    <h3>Biography</h3>
                    <div id="authorBio">My name is walter white</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style>
</style>