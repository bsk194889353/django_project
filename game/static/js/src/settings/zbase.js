class Settings{
    constructor(root){
        this.root = root;
        this.platform  = "WEB";
        if(this.root.acwingOS) this.platform = "ACAPP";
        this.username = "";
        this.photo = "";
        this.$settings = $(`
<div class="ac-game-settings">
    <div class="ac-game-settings-login">
        <div class="ac-game-settings-title">
            登录
        </div>
        <div class="ac-game-settings-username">
            <div class="ac-game-settings-item">
                <input type="text" placeholder="用户名">
            </div>
        </div>
        <div class="ac-game-settings-password">
            <div class="ac-game-settings-item">
                <input type="password",placeholder="密码">
            </div>
        </div>
        <div class="ac-game-settings-submit">
            <div class="ac-game-settings-item">
                <button>登录</button>
            </div>
        </div>
        <div class="ac-game-settings-error-messages">
        </div>
        <div class="ac-game-settings-option">
        注册
        </div>
        <br>
        <br>
        <div class="ac-game-settings-acwing">
            <img width="30" src="https://app6641.acapp.acwing.com.cn/static/image/settings/acwing_logo.png">
            <br>
            <br>
            <div>
                acwing一键登录
            <div>
        </div>
    </div>
    <div class="ac-game-settings-register">

    </div>
</div>
`);
        this.$login = this.$settings.find(".ac-game-settings-login");
        this.$login.hide();
        this.$register = this.$settings.find(".ac-game-settings-register");
        this.$register.hide();


        this.root.$ac_game.append(this.$settings);
        this.start();
    }
    start(){
        this.getinfo();
    }
    login(){//打开登陆界面
        this.$register.hide();
        this.$login.show();

    }


    register(){// 打开注册界面
        this.$login.hide();
        this.$register.show();
        
    }
    getinfo(){
        let outer = this;
        console.log(outer.platform);
        $.ajax({
            url:"https://app6641.acapp.acwing.com.cn/settings/getinfo/",
            type:"GET",
            data:{
                platform:outer.platform,

            },
            success:function(resp){
                console.log(resp);
                if(resp.result === "success"){
                    outer.username = resp.username;
                    outer.photo = resp.photo;
                    outer.hide();
                    outer.root.menu.show();
                } else {
                    outer.login();

                }
            }
        });
    }
    hide(){
        this.$settings.hide();
    }

    show(){
        this.$settings.show();
    }

}
