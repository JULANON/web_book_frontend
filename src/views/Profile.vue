<template>
  <div class="container-fluid">
    <div class="mt-4 page-header min-height-300 border-radius-xl"></div>
    <div
      class="mx-4 overflow-hidden card card-body blur shadow-blur"
      style="margin-top: -19rem !important;"
    >
      <div class="row gx-4">
        <div class="col-auto">
          <div class="avatar avatar-xl position-relative">
            <img
              src="/profile.jpg"
              alt="profile_image"
              class="shadow-sm w-100 border-radius-lg"
            />
          </div>
        </div>
        <div class="col-auto my-auto">
          <div class="h-100">
            <h5 class="mb-1">Thitiwut Wongsa</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-4 container-fluid">
    <div class="mt-3 row">
      <div class="col-15 col-md-15 col-xl-20">
        <div class="card h-100">
          <div class="p-3 pb-0 card-header">
            <h6 class="mb-0">My Book</h6>
            <div class="container">
              <div class="row justify-content-around">
                <div class="col-4">
                  <div class="d-flex flex-row">
                    <div class="p-2">
                      <img
                        src="../public/image/black_book.png"
                        alt=""
                        style="width: 120px;"/>
                    </div>
                    <div class="p-2">
                      <h4>Title</h4>
                      <br />
                      <p>Author</p>
                      <br />
                      <p>Pulisher</p>
                    </div>
                  </div>
<!--  -->
                </div>
                <div class="col-4 align-self-center">
                  <button style="background-color:Tomato;" type="button" href="delete.php?id=10" onclick="return confirm('ยืนยันการลบข้อมูล ??');">
                    return
                  </button>
                </div>
              </div>
              <br />
              <div class="row justify-content-around">
                <div class="col-4">
                  <div class="d-flex flex-row">
                    <div class="p-2">
                      <img
                        src="../public/image/black_book.png"
                        alt=""
                        style="width: 120px;"/>
                    </div>
                    <div class="p-2">
                      <h4>Title</h4>
                      <br />
                      <p>Author</p>
                      <br />
                      <p>Pulisher</p>
                    </div>
                  </div>
<!-- -->
                </div>
                <div class="col-4 col-4 align-self-center">
                  <button style="background-color:Tomato;" type="button" href="delete.php?id=10" onclick="return confirm('ยืนยันการลบข้อมูล ??');">
                    return
                  </button>
                </div>
              </div>
              <br />
              <div class="row justify-content-around">
                <div class="col-4">
                  <div class="d-flex flex-row">
                    <div class="p-2">
                      <img
                        src="../public/image/black_book.png"
                        alt=""
                        style="width: 120px;"/>
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
                <div class="col-4 col-4 align-self-center">
                  <button style="background-color:Tomato;" type="button" href="delete.php?id=10" onclick="return confirm('ยืนยันการลบข้อมูล ??');">
                    return
                  </button>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sophie from '@/assets/img/kal-visuals-square.jpg'
import marie from '@/assets/img/marie.jpg'
import ivana from '@/assets/img/ivana-square.jpg'
import peterson from '@/assets/img/team-4.jpg'
import nick from '@/assets/img/team-3.jpg'
import img1 from '@/assets/img/home-decor-1.jpg'
import img2 from '@/assets/img/home-decor-2.jpg'
import img3 from '@/assets/img/home-decor-3.jpg'
import team1 from '@/assets/img/team-1.jpg'
import team2 from '@/assets/img/team-2.jpg'
import team3 from '@/assets/img/team-3.jpg'
import team4 from '@/assets/img/team-4.jpg'
import bgImg from '@/assets/img/curved-images/curved14.jpg'



export default {
  name: 'ProfileOverview',
  components: {},
  data () {
    return {
      showMenu: false,
      sophie,
      marie,
      ivana,
      peterson,
      nick,
      img1,
      team1,
      team2,
      team3,
      team4,
      img2,
      img3,
      bgImg
    }
  }
}
</script>
