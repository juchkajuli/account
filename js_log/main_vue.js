

Vue.component('header-component' , {
    data: function () {
        return {
            title: "Named"
        };
    },
    template: '<div class="header__cont"><div class="header"><img src="img/котик.svg" alt="Логотип" class="logo"><span class="name-logo">Название</span><input class="search" type="text" autocapitalize="none" autocapitalize="none" placeholder="Поиск" value=""><div class="menu-list"><a href="#" class="menu-icon"><img src="img/домикк.svg" alt="home" width="25px"><a href="#" class="menu-icon"><img src="img/письмо.svg" alt="message"></a><a href="#" class="menu-icon"><img src="img/сердце.svg" alt="interes"></a><a href="#" class="menu-icon"><img src="img/avatar1.svg" alt="avatar" width="25px"></a></div></div></div>'
});
new Vue ({ el: '#header-demo'});
