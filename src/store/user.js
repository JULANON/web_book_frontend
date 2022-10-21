import { defineStore } from "pinia";
import axios from "axios";
import qs from "qs";
import router from "@/router";
import Swal from "sweetalert2";
export const useUserStore = defineStore('user',{
    state: () => ({ 
        username: "",
        password: "",
        user: {name: "", id: 0, isAdmin: false},
        remember: false,
        isAuthen: false,
        access_token: "",
    }),

    actions: {
        async register(){
            try{
                let userRegister = await axios.post("http://localhost:8000/data/users/",
                    {
                        username: this.username,
                        password: this.password,
                        name: this.user.name,
                    },
                );
                if(userRegister.status == 200){
                    Swal.fire("Sign Up Success","","success");
                    router.push("/");
                }else{
                    Swal.fire("Sign Up fail",userRegister.data.data,"error");
                }
            }catch(e) {
                    Swal.fire("Sign Up Fail", e.response.data.error_description, "error");
            }
        },
        async getUserDetail() {
            try{
                if(this.access_token == ""){
                    if(localStorage.getItem("access_token") != null){
                        this.$patch({
                            access_token: localStorage.getItem("access_token"),
                        });
                    }else{
                        return;
                    }
                }
                let userData = await axios.get(
                    "http://localhost:8000/me",
                    {
                        headers: {
                            Authorization: `Bearer ${this.access_token}`,
                        },
                    });
                if(userData.data.data.role_id === 0){
                    this.$patch({
                        user: { 
                            name: userData.data.data.name, 
                            id: userData.data.data.id,
                            isAdmin: true,
                        },
                        isAuthen : true,
                    });
                }else{
                    this.$patch({
                        user: { 
                            name: userData.data.data.name, 
                            id: userData.data.data.id,
                        },
                        isAuthen : true,
                    });
                }
            } catch(e) {
                this.$patch({ isAuthen : false });
                Swal.fire("get user data fail", "", "error");
            }

        },
        async login() {
            try{
                let userLogin = await axios.post(
                    "http://localhost:8000/oauth/login",
                    qs.stringify({
                        username: this.username,
                        password: this.password,
                        grant_type: "password",
                    }),
                    {
                        headers: { 
                            Authorization:"Basic YXBwX2NsaWVudDphcHBfY2xpZW50X3NlY3JldA==",
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                    }
                );
                    if(userLogin.status == 200 && userLogin.data.access_token != ""){
                        localStorage.setItem("access_token", userLogin.data.access_token);
                        this.$patch({
                            
                            access_token: userLogin.data.access_token,
                        })
                        await this.getUserDetail();
                        Swal.fire("Login Success","","success");
                        router.push("/Home");
                    }
            }catch(e) {
                    Swal.fire("Login Fail", e.response.data.error_description, "error");
            }
            
        },
    }
});