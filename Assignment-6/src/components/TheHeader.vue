<template>
    <nav class="header">
        <div class="container">
            <div class="main-menu d-md-flex justify-content-between align-items-center">
                <div class="right-menu">
                    <h4>Big City Guide</h4>
                </div>
                <div class="left-menu">
                    <ul class="d-flex justify-content-center">
                        <li class="list-unstyled nav-item text-uppercase fw-medium"> <a href=""  class="text-decoration-none">Ice cream</a></li>
                        <li class="list-unstyled nav-item text-uppercase fw-medium"> <a href="" class="text-decoration-none">donats</a></li>
                        <li class="list-unstyled nav-item text-uppercase fw-medium"> <a href="" class="text-decoration-none">tea</a></li>
                        <li class="list-unstyled nav-item text-uppercase fw-medium"> <a href="" class="text-decoration-none">coffee</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>
<style scoped>
.nav-item a{
  color: #6ACBC2;
  align-items: center;
}
ul{
  margin-top: 1rem;
}
ul li a{
  padding:0 1rem ;
}
@media screen and (max-width:767px) {
  .right-menu,.left-menu{
    text-align: center;
  }
  ul li a{
    padding:0 5px ;
    font-size: 13px;
  }
}
</style>