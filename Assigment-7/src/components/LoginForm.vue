<template>
<section class="d-flex justify-content-center align-items-center vh-100">
    <div>
        <form @submit.prevent="getUserLogin">
            <div class="card-box shadow p-5">
                <p>Welcome back,<br> Please login to you admin account.</p>
                <div>
                    <label for="username" class="form-label">Username</label>
                    <input type="text" v-model="username" class="form-control" id="username"  aria-label="Username">
                </div>
                <div>
                    <label for="password" class="form-label">Password</label>
                    <input type="password" v-model="password" class="form-control" id="password">
            </div>
            <div class="text-end py-3">
                <button class="px-3 py-2 border-0 rounded-5 ">Login</button>
            </div>
            </div>
        </form>
        <div class="mt-5">
            <h4>User Login:</h4>
            <ul>
                <li v-for="user in userLogin" :key="user"> <strong>Username: </strong>{{ user.username }} <strong>Password: </strong> {{ user.password }}</li>
            </ul>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data(){
        return{
            username:'',
            password:'',
            userLogin:[]
        }
    },
    methods:{
        getUserLogin(){
            var user = {
                username: this.username,
                password: this.password,
            }
            this.userLogin.push(user);
            this.username = ''
            this.password = ''
        },
    }
}
</script>