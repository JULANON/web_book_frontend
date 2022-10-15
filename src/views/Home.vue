<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card mb-4">
          <div class="card-header pb-0">
            <div class="d-flex flex-row mb-3  justify-content-end">
              <div class="p-2">order by:</div>
              <div class="p-2 ">
                <select v-model="selected" style="width: 130px;">
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>
              <div class="p-2">show:</div>
              <div class="p-2">
                <select v-model="selected" style="width: 90px;">
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>
              <div class="p-2">per page</div>
            </div>
            <div class="mt-3">
<!-- Selected: <strong>{{ selected }}</strong> เอาไว้ค้นหาแล้วแสดงรายการ-->
              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="1500">
                <ol class="carousel-indicators">
                  <li data-target="#" data-slide-to="0" class="active numberli">1</li>
                  <li data-target="#" data-slide-to="1" class="numberli">2</li>
                  <li data-target="#" data-slide-to="2" class="numberli">3</li>
                  <li data-target="#" data-slide-to="1" class="numberli">4</li>
                  <li data-target="#" data-slide-to="2" class="numberli">5</li>
                  <li data-target="#" data-slide-to="2" class="numberli">...</li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="container">
                      <div class="d-flex justify-content-around">
                      <div class="d-flex flex-row">
                        <div class="p-2">
                          <img
                            src="../public/image/dark_green_book.png"
                            alt=""
                            style="width: 100px;"
                            onclick=""
                          />
                        </div>
                        <div class="p-2">
                          <h4>Title</h4>
                          <br />
                          <p>Author</p>
                          <br />
                          <p>Pulisher</p>
                        </div>
                      </div>
                      <div class="d-flex flex-row">
                        <div class="p-2">
                          <img
                            src="../public/image/blue_book.png"
                            alt=""
                            style="width: 100px;"
                          />
                        </div>
                        <div class="p-2">
                          <h4>Title</h4>
                          <br />
                          <p>Author</p>
                          <br />
                          <p>Pulisher</p>
                        </div>
                      </div>
                      </div>
                    <!--  -->
                    <div class="d-flex justify-content-around">
                      <div class="d-flex flex-row">
                        <div class="p-2">
                          <img
                            src="../public/image/crimson_book.png"
                            alt=""
                            style="width: 100px;"
                          />
                        </div>
                        <div class="p-2">
                          <h4>Title</h4>
                          <br />
                          <p>Author</p>
                          <br />
                          <p>Pulisher</p>
                        </div>
                      </div>
                      <div class="d-flex flex-row">
                        <div class="p-2">
                          <img
                            src="../public/image/gray_book.png"
                            alt=""
                            style="width: 100px;"
                          />
                        </div>
                        <div class="p-2">
                          <h4>Title</h4>
                          <br />
                          <p>Author</p>
                          <br />
                          <p>Pulisher</p>
                        </div>
                      </div>
                    </div>
    <!--  -->
                    <div class="d-flex justify-content-around">
                      <div class="d-flex flex-row">
                        <div class="p-2">
                          <img
                            src="../public/image/red_book.png"
                            alt=""
                            style="width: 100px;"
                          />
                        </div>
                        <div class="p-2">
                          <h4>Title</h4>
                          <br />
                          <p>Author</p>
                          <br />
                          <p>Pulisher</p>
                        </div>
                      </div>
                      <div class="d-flex flex-row">
                        <div class="p-2">
                          <img
                            src="../public/image/sky_book.png"
                            alt=""
                            style="width: 100px;"
                          />
                        </div>
                        <div class="p-2">
                          <h4>Title</h4>
                          <br />
                          <p>Author</p>
                          <br />
                          <p>Pulisher</p>
                        </div>
                      </div>
                    </div>

                    <div class="d-flex justify-content-around">
                      <div class="d-flex flex-row">
                        <div class="p-2">
                          <img
                            src="../public/image/white_book.png"
                            alt=""
                            style="width: 100px;"
                          />
                        </div>
                        <div class="p-2">
                          <h4>Title</h4>
                          <br />
                          <p>Author</p>
                          <br />
                          <p>Pulisher</p>
                        </div>
                      </div>
                      <div class="d-flex flex-row">
                        <div class="p-2">
                          <img
                            src="../public/image/yellow_book.png"
                            alt=""
                            style="width: 100px;"
                          />
                        </div>
                        <div class="p-2">
                          <h4>Title</h4>
                          <br />
                          <p>Author</p>
                          <br />
                          <p>Pulisher</p>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="container">
                      <div class="d-flex justify-content-around">
                      <div class="d-flex flex-row">
                        <div class="p-2">
                          <img
                            src="../public/image/dark_green_book.png"
                            alt=""
                            style="width: 100px;"
                            onclick=""
                          />
                        </div>
                        <div class="p-2">
                          <h4>Title</h4>
                          <br />
                          <p>Author</p>
                          <br />
                          <p>Pulisher</p>
                        </div>
                      </div>
                      <div class="d-flex flex-row">
                        <div class="p-2">
                          <img
                            src="../public/image/blue_book.png"
                            alt=""
                            style="width: 100px;"
                          />
                        </div>
                        <div class="p-2">
                          <h4>Title</h4>
                          <br />
                          <p>Author</p>
                          <br />
                          <p>Pulisher</p>
                        </div>
                      </div>
                      </div>
                    <!--  -->
                    <div class="d-flex justify-content-around">
                      <div class="d-flex flex-row">
                        <div class="p-2">
                          <img
                            src="../public/image/crimson_book.png"
                            alt=""
                            style="width: 100px;"
                          />
                        </div>
                        <div class="p-2">
                          <h4>Title</h4>
                          <br />
                          <p>Author</p>
                          <br />
                          <p>Pulisher</p>
                        </div>
                      </div>
                      <div class="d-flex flex-row">
                        <div class="p-2">
                          <img
                            src="../public/image/gray_book.png"
                            alt=""
                            style="width: 100px;"
                          />
                        </div>
                        <div class="p-2">
                          <h4>Title</h4>
                          <br />
                          <p>Author</p>
                          <br />
                          <p>Pulisher</p>
                        </div>
                      </div>
                    </div>
    <!--  -->
                    <div class="d-flex justify-content-around">
                      <div class="d-flex flex-row">
                        <div class="p-2">
                          <img
                            src="../public/image/red_book.png"
                            alt=""
                            style="width: 100px;"
                          />
                        </div>
                        <div class="p-2">
                          <h4>Title</h4>
                          <br />
                          <p>Author</p>
                          <br />
                          <p>Pulisher</p>
                        </div>
                      </div>
                      <div class="d-flex flex-row">
                        <div class="p-2">
                          <img
                            src="../public/image/sky_book.png"
                            alt=""
                            style="width: 100px;"
                          />
                        </div>
                        <div class="p-2">
                          <h4>Title</h4>
                          <br />
                          <p>Author</p>
                          <br />
                          <p>Pulisher</p>
                        </div>
                      </div>
                    </div>

                    <div class="d-flex justify-content-around">
                      <div class="d-flex flex-row">
                        <div class="p-2">
                          <img
                            src="../public/image/white_book.png"
                            alt=""
                            style="width: 100px;"
                          />
                        </div>
                        <div class="p-2">
                          <h4>Title</h4>
                          <br />
                          <p>Author</p>
                          <br />
                          <p>Pulisher</p>
                        </div>
                      </div>
                      <div class="d-flex flex-row">
                        <div class="p-2">
                          <img
                            src="../public/image/yellow_book.png"
                            alt=""
                            style="width: 100px;"
                          />
                        </div>
                        <div class="p-2">
                          <h4>Title</h4>
                          <br />
                          <p>Author</p>
                          <br />
                          <p>Pulisher</p>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="container">
                      <div class="d-flex justify-content-around">
                      <div class="d-flex flex-row">
                        <div class="p-2">
                          <img
                            src="../public/image/dark_green_book.png"
                            alt=""
                            style="width: 100px;"
                            onclick=""
                          />
                        </div>
                        <div class="p-2">
                          <h4>Title</h4>
                          <br />
                          <p>Author</p>
                          <br />
                          <p>Pulisher</p>
                        </div>
                      </div>
                      <div class="d-flex flex-row">
                        <div class="p-2">
                          <img
                            src="../public/image/blue_book.png"
                            alt=""
                            style="width: 100px;"
                          />
                        </div>
                        <div class="p-2">
                          <h4>Title</h4>
                          <br />
                          <p>Author</p>
                          <br />
                          <p>Pulisher</p>
                        </div>
                      </div>
                      </div>
                    <!--  -->
                    <div class="d-flex justify-content-around">
                      <div class="d-flex flex-row">
                        <div class="p-2">
                          <img
                            src="../public/image/crimson_book.png"
                            alt=""
                            style="width: 100px;"
                          />
                        </div>
                        <div class="p-2">
                          <h4>Title</h4>
                          <br />
                          <p>Author</p>
                          <br />
                          <p>Pulisher</p>
                        </div>
                      </div>
                      <div class="d-flex flex-row">
                        <div class="p-2">
                          <img
                            src="../public/image/gray_book.png"
                            alt=""
                            style="width: 100px;"
                          />
                        </div>
                        <div class="p-2">
                          <h4>Title</h4>
                          <br />
                          <p>Author</p>
                          <br />
                          <p>Pulisher</p>
                        </div>
                      </div>
                    </div>
    <!--  -->
                    <div class="d-flex justify-content-around">
                      <div class="d-flex flex-row">
                        <div class="p-2">
                          <img
                            src="../public/image/red_book.png"
                            alt=""
                            style="width: 100px;"
                          />
                        </div>
                        <div class="p-2">
                          <h4>Title</h4>
                          <br />
                          <p>Author</p>
                          <br />
                          <p>Pulisher</p>
                        </div>
                      </div>
                      <div class="d-flex flex-row">
                        <div class="p-2">
                          <img
                            src="../public/image/sky_book.png"
                            alt=""
                            style="width: 100px;"
                          />
                        </div>
                        <div class="p-2">
                          <h4>Title</h4>
                          <br />
                          <p>Author</p>
                          <br />
                          <p>Pulisher</p>
                        </div>
                      </div>
                    </div>

                    <div class="d-flex justify-content-around">
                      <div class="d-flex flex-row">
                        <div class="p-2">
                          <img
                            src="../public/image/white_book.png"
                            alt=""
                            style="width: 100px;"
                          />
                        </div>
                        <div class="p-2">
                          <h4>Title</h4>
                          <br />
                          <p>Author</p>
                          <br />
                          <p>Pulisher</p>
                        </div>
                      </div>
                      <div class="d-flex flex-row">
                        <div class="p-2">
                          <img
                            src="../public/image/yellow_book.png"
                            alt=""
                            style="width: 100px;"
                          />
                        </div>
                        <div class="p-2">
                          <h4>Title</h4>
                          <br />
                          <p>Author</p>
                          <br />
                          <p>Pulisher</p>
                        </div>
                      </div>
                    </div>
                    </div>
                    <!-- <img class="d-block w-100" src="..." alt="Third slide"> -->
                  </div>
                </div>
                <!-- <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a> -->
              </div>

            </div>
          </div>
          <!-- <div class="card-body px-0 pt-0 pb-2">
            <ul class="w3-pagination">
              <li><a href="#">«</a></li>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#">...</a></li>
              <li><a href="#">»</a></li>
            </ul>
          </div> -->
          
          <!-- <div class="d-flex justify-content-center">
            <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="false">
              <slide>
                Slide 1 Content
              </slide>
              <slide>
                Slide 2 Content
              </slide>
            </carousel>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DashboardDefault',
  components: {},
  data () {
    return {
      selected: null,
      options: [
        { value: 'A', text: 'Option A (from options prop)' },
        { value: 'B', text: 'Option B (from options prop)' }
      ]
    }
  }
}
</script>
