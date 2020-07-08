(this["webpackJsonpa-bitter-parent"]=this["webpackJsonpa-bitter-parent"]||[]).push([[0],{24:function(e,t,a){e.exports=a(50)},29:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),o=a.n(r),s=(a(29),a(1)),c=a(2),u=a(4),i=a(3),p=a(6),m=a.n(p),h=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"userSuggestion"},l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:this.props.results.recoImage,alt:this.props.results.recoImageAlt})),l.a.createElement("div",{className:"text"},l.a.createElement("h2",null,this.props.results.recoFoodTitle),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",null,"Fat Amount:")," ",this.props.results.recommendedFood[0],"g"),l.a.createElement("li",null,l.a.createElement("span",null,"Calories:")," ",this.props.results.recommendedFood[1]," kJ"),l.a.createElement("li",null,l.a.createElement("span",null,"Sugar:")," ",this.props.results.recommendedFood[2],"g"),l.a.createElement("li",null,l.a.createElement("span",null,"Protein:")," ",this.props.results.recommendedFood[3],"g"),l.a.createElement("li",null,l.a.createElement("span",null,"Carbohydrates:")," ",this.props.results.recommendedFood[4],"g"))))}}]),a}(n.Component),d=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:this.props.results.userImage,alt:this.props.results.userImageAlt})),l.a.createElement("div",{className:"text"},l.a.createElement("h2",null,this.props.results.userInput),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",null,"Fat Amount: "),this.props.results.usersFood[0],"g"),l.a.createElement("li",null,l.a.createElement("span",null,"Calories:")," ",this.props.results.usersFood[1],"kJ"),l.a.createElement("li",null,l.a.createElement("span",null,"Sugar: "),this.props.results.usersFood[2],"g"),l.a.createElement("li",null,l.a.createElement("span",null,"Protein: "),this.props.results.usersFood[3],"g"),l.a.createElement("li",null,l.a.createElement("span",null,"Carbohydrates:")," ",this.props.results.usersFood[4],"g"))))}}]),a}(n.Component),E=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,this.props.results.checkUserChoice?l.a.createElement("div",{className:"button"},l.a.createElement("button",{className:"subBtn",onClick:this.props.subClick},"Give me a substitute")):null,this.props.results.checkReco?l.a.createElement("div",{className:"sugarCounter"},l.a.createElement("h4",null,this.props.results.recoFoodTitle," has ",l.a.createElement("span",null,this.props.results.sugarDiff,"g")," less sugar")):null,l.a.createElement("div",{className:"userResults"},l.a.createElement("div",{className:"userSelection"},this.props.results.checkUserChoice?l.a.createElement(d,{results:this.props.results,subClick:this.props.subClick}):null),this.props.results.checkReco?l.a.createElement(h,{handleSave:this.props.handleSave,results:this.props.results}):null))}}]),a}(n.Component),k=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement("form",null,l.a.createElement("label",{htmlFor:"foodMenu"},"Select what you would Like"),l.a.createElement("select",{id:"foodMenu",onChange:this.props.handleChange,defaultValue:!0},l.a.createElement("option",{disabled:!0,value:!0},"Choose your food"),l.a.createElement("option",{value:"oreos"},"Oreos"),l.a.createElement("option",{value:"chocolate waffles"},"Chocolate Waffles"),l.a.createElement("option",{value:"captain crunch cereal"},"Captain Crunch Cereal"),l.a.createElement("option",{value:"nutella sandwich"},"Nutella Sandwich"),l.a.createElement("option",{value:"yogurt"},"Yogurt"),l.a.createElement("option",{value:"muffin"},"Muffin"),l.a.createElement("option",{value:"egg tart"},"Egg Tart"),l.a.createElement("option",{value:"banana bread"},"Banana Bread"),l.a.createElement("option",{value:"breakfast drink"},"Breakfast Drink"),l.a.createElement("option",{value:"cake"},"Cake"))),l.a.createElement(E,{results:this.props.results,subClick:this.props.subClick}))}}]),a}(n.Component),f=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement("form",{className:"foodSelector"},l.a.createElement("label",{htmlFor:"foodMenu"},"Select what you would Like"),l.a.createElement("select",{id:"foodMenu",onChange:this.props.handleChange,defaultValue:!0},l.a.createElement("option",{disabled:!0,value:!0},"Choose your food"),l.a.createElement("option",{value:"teriyaki steak"},"Teriyaki Steak"),l.a.createElement("option",{value:"jelly sandwich"},"Jelly Sandwich"),l.a.createElement("option",{value:"baconator"},"Baconator"),l.a.createElement("option",{value:"thai noodles"},"Thai Noodles"),l.a.createElement("option",{value:"Caesar Salad"},"Caesar Salad"),l.a.createElement("option",{value:"apple dumplings"},"Apple Dumplings"),l.a.createElement("option",{value:"grilled peach"},"Grilled Peaches"),l.a.createElement("option",{value:"mochi"},"Mochi"),l.a.createElement("option",{value:"pork bbq burrito"},"Pork BBQ Burrito"),l.a.createElement("option",{value:"cake"},"Cake"))),l.a.createElement(E,{results:this.props.results,subClick:this.props.subClick}))}}]),a}(n.Component),v=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement("form",null,l.a.createElement("label",{htmlFor:"foodMenu"},"Select what you would Like"),l.a.createElement("select",{id:"foodMenu",onChange:this.props.handleChange,defaultValue:!0},l.a.createElement("option",{disabled:!0,value:!0},"Choose your food"),l.a.createElement("option",{value:"bbq 0ribs"},"BBQ Ribs"),l.a.createElement("option",{value:"walnut shrimp"},"Walnut Shrimp"),l.a.createElement("option",{value:"sesame chicken"},"Sesame Chicken"),l.a.createElement("option",{value:"vermicelli noodles with pork"},"Vermicelli Noodles with Pork"),l.a.createElement("option",{value:"jelly donuts"},"Jelly Donuts"),l.a.createElement("option",{value:"cinnamon bun"},"Cinnamon Buns"),l.a.createElement("option",{value:"fried apple pie"},"Fried Apple Pie"),l.a.createElement("option",{value:"pulled pork"},"Pulled Pork"),l.a.createElement("option",{value:"banana split"},"Banana Split"),l.a.createElement("option",{value:"cake"},"Cake"))),l.a.createElement(E,{results:this.props.results,subClick:this.props.subClick}))}}]),a}(n.Component),b=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement("form",null,l.a.createElement("label",{htmlFor:"foodMenu"},"Select what you would Like"),l.a.createElement("select",{id:"foodMenu",onChange:this.props.handleChange,defaultValue:!0},l.a.createElement("option",{disabled:!0,value:!0},"Choose your food"),l.a.createElement("option",{value:"cheesecake"},"Cheesecake"),l.a.createElement("option",{value:"candy corn"},"Candy Corn"),l.a.createElement("option",{value:"ice cream cake"},"Ice Cream Sandwiches"),l.a.createElement("option",{value:"sweetened iced tea"},"Sweetened Iced Tea"),l.a.createElement("option",{value:"apple sauce"},"Applesauce"),l.a.createElement("option",{value:"milkshake"},"Milkshake"),l.a.createElement("option",{value:"salted caramel pie"},"Salted Caramel Pie"),l.a.createElement("option",{value:"chocolate milk"},"Chocolate Milk"),l.a.createElement("option",{value:"vanilla cupcake"},"Vanilla Cupcakes"),l.a.createElement("option",{value:"cake"},"Cake"))),l.a.createElement(E,{results:this.props.results,subClick:this.props.subClick}))}}]),a}(n.Component),C=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"userOptions"},l.a.createElement("button",{onClick:this.props.handleBreakfastClick},"Breakfast"),l.a.createElement("button",{onClick:this.props.handleLunchClick},"Lunch"),l.a.createElement("button",{onClick:this.props.handleDinnerClick},"Dinner"),l.a.createElement("button",{onClick:this.props.handleSnackClick},"Snack")),this.props.results.breakfast?l.a.createElement(k,{results:this.props.results,handleChange:this.props.handleChange,subClick:this.props.subClick}):null,this.props.results.lunch?l.a.createElement(f,{results:this.props.results,handleChange:this.props.handleChange,subClick:this.props.subClick}):null,this.props.results.dinner?l.a.createElement(v,{results:this.props.results,handleChange:this.props.handleChange,subClick:this.props.subClick}):null,this.props.results.snack?l.a.createElement(b,{results:this.props.results,handleChange:this.props.handleChange,subClick:this.props.subClick}):null)}}]),a}(n.Component),g=a(9),y=a.n(g);a(47);y.a.initializeApp({apiKey:"AIzaSyBpqlg35893WVbTIvvIrHL3SaFDmxaDFsc",authDomain:"abitterparent.firebaseapp.com",databaseURL:"https://abitterparent.firebaseio.com",projectId:"abitterparent",storageBucket:"abitterparent.appspot.com",messagingSenderId:"1015830040041",appId:"1:1015830040041:web:7edb8b23ec4e7e0e4a8f78"});var O=y.a,S=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).deleteActivity=function(e){O.database().ref().child(e).remove()},e.state={foods:[]},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;O.database().ref().on("value",(function(t){var a=[],n=t.val();for(var l in n)a.push({food:n[l],key:l});e.setState({foods:a})}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"showFoodPairs"},l.a.createElement("h3",null,"Your Suggestions:"),this.state.foods.map((function(t){var a=t.key,r=t.food;return l.a.createElement(n.Fragment,null,l.a.createElement("div",{key:a,className:"food"},l.a.createElement("ul",{className:"savedFood text"},l.a.createElement("li",null,l.a.createElement("h2",null,r.food1.userFoodName)),l.a.createElement("li",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",null,"Fat Amount:")," ",r.food1.userFoodOption[0],"g"),l.a.createElement("li",null,l.a.createElement("span",null,"Calories:")," ",r.food1.userFoodOption[1],"kJ"),l.a.createElement("li",null,l.a.createElement("span",null,"Sugar:")," ",r.food1.userFoodOption[2],"g"),l.a.createElement("li",null,l.a.createElement("span",null,"Protein:")," ",r.food1.userFoodOption[3],"g"),l.a.createElement("li",null,l.a.createElement("span",null,"Carbohydrates:")," ",r.food1.userFoodOption[4],"g")))),l.a.createElement("ul",{className:"savedFood text"},l.a.createElement("li",null,l.a.createElement("h2",null,r.food2.userRecoName)),l.a.createElement("li",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",null,"Fat Amount:")," ",r.food2.userRecoOption[0],"g"),l.a.createElement("li",null,l.a.createElement("span",null,"Calories:")," ",r.food2.userRecoOption[1],"kJ"),l.a.createElement("li",null,l.a.createElement("span",null,"Sugar: "),r.food2.userRecoOption[2],"g"),l.a.createElement("li",null,l.a.createElement("span",null,"Protein: "),r.food2.userRecoOption[3],"g"),l.a.createElement("li",null,l.a.createElement("span",null,"Carbohydrates:")," ",r.food2.userRecoOption[4],"g"))))),l.a.createElement("div",{className:"button"},l.a.createElement("button",{onClick:function(){e.deleteActivity(a)}},"Delete")))})))}}]),a}(n.Component),F=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).unsplashCall=function(t){m()({url:"https://api.unsplash.com/photos/random",method:"GET",responseType:"JSON",params:{client_id:e.state.unsplashKey,query:"".concat(t),orientation:"squarish"}}).then((function(t){var a=t.data.urls.regular,n=t.data.alt_description;e.setState({userImage:a,userImageAlt:n})}))},e.nutritionixCall=function(t,a){m()({url:"https://trackapi.nutritionix.com/v2/search/instant",method:"POST",responseType:"JSON",headers:{"Content-Type":"application/json","x-app-id":"2f61b616","x-app-key":"3c2af909b8bc091e21372b59a9e4b835","x-remote-user-id":"0"},data:{query:t,detailed:!0,full_nutrients:{269:{lte:a}}}}).then((function(t){for(var a,n,l,r,o,s=t.data.common[0].full_nutrients,c=0;c<s.length;c++)269===s[c].attr_id?a=Math.round(s[c].value):204===s[c].attr_id?n=Math.round(s[c].value):208===s[c].attr_id?l=Math.round(s[c].value):203===s[c].attr_id?r=Math.round(s[c].value):205===s[c].attr_id&&(o=Math.round(s[c].value));void 0===n?n=0:void 0===l?l=0:void 0===r?r=0:void 0===o&&(o=0);var u=[n,l,a,r,o];e.setState({usersFood:u,sugarValue:a}),0===Math.floor(10*Math.random())?e.setState({sugarAllowed:e.state.sugarValue-5}):e.setState({sugarAllowed:e.state.sugarValue-10})}))},e.handleChange=function(t){t.preventDefault();var a=e.state.userInput;a=t.target.value,e.setState({userInput:a,checkUserChoice:!1})},e.handleBreakfastClick=function(){e.setState({breakfast:!0,lunch:!1,dinner:!1,snack:!1,checkUserChoice:!1,checkReco:!1})},e.handleLunchClick=function(){e.setState({breakfast:!1,lunch:!0,dinner:!1,snack:!1,checkUserChoice:!1,checkReco:!1})},e.handleDinnerClick=function(){e.setState({breakfast:!1,lunch:!1,dinner:!0,snack:!1,checkUserChoice:!1,checkReco:!1})},e.handleSnackClick=function(){e.setState({breakfast:!1,lunch:!1,dinner:!1,snack:!0,checkUserChoice:!1,checkReco:!1})},e.handleSave=function(t){t.preventDefault();var a=O.database().ref(),n=e.state.usersFood,l=e.state.recommendedFood,r={food1:{userFoodName:e.state.userInput,userFoodOption:n},food2:{userRecoName:e.state.recoFoodTitle,userRecoOption:l}};a.push(r)},e.subClick=function(){e.setState({checkReco:!0}),0===Math.floor(10*Math.random())?e.setState({sugarAllowed:e.state.sugarValue-5}):e.setState({sugarAllowed:e.state.sugarValue-10}),m()({url:"https://trackapi.nutritionix.com/v2/search/instant",method:"POST",responseType:"JSON",headers:{"Content-Type":"application/json","x-app-id":"2f61b616","x-app-key":"3c2af909b8bc091e21372b59a9e4b835","x-remote-user-id":"0"},data:{query:"vegetables || fruits || grains",detailed:!0,full_nutrients:{269:{lte:e.state.sugarAllowed}}}}).then((function(t){var a,n=t.data.common.length;a=Math.floor(Math.random()*n);for(var l,r,o,s,c,u=t.data.common[a].full_nutrients,i=0;i<u.length;i++)269===u[i].attr_id?l=Math.round(u[i].value):204===u[i].attr_id?r=Math.round(u[i].value):208===u[i].attr_id?o=Math.round(u[i].value):203===u[i].attr_id?s=Math.round(u[i].value):205===u[i].attr_id&&(c=Math.round(u[i].value));void 0===r?r=0:void 0===o?o=0:void 0===s?s=0:void 0===c&&(c=0);var p=[r,o,l,s,c];e.setState({recommendedFood:p,recoFoodTitle:t.data.common[a].food_name,sugarDiff:e.state.sugarValue-p[2]}),m()({url:"https://api.unsplash.com/photos/random",method:"GET",responseType:"JSON",params:{client_id:e.state.unsplashKey,query:e.state.recoFoodTitle,orientation:"squarish"}}).then((function(t){var a=t.data.urls.small,n=t.data.alt_description;e.setState({recoImage:a,recoImageAlt:n})}))}))},e.state={userInput:"",recoFoodTitle:"",sugarValue:"",sugarDiff:"",recoSugarValue:"",usersFood:[],recommendedFood:[],checkReco:!1,checkUserChoice:!1,breakfast:!1,lunch:!1,dinner:!1,snack:!1,userImage:"",userImageAlt:"",recoImage:"",recoImageAlt:"",firebaseObj:{},unsplashKey:"XOIxVf1JifM9_NSItXssxrkEDz917Vsu03WTP2T6nbA",sugarAllowed:0},e}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.userInput!==this.state.userInput&&(this.setState({checkReco:!1,checkUserChoice:!0}),this.unsplashCall(this.state.userInput),this.nutritionixCall(this.state.userInput,1e4))}},{key:"render",value:function(){return l.a.createElement("div",{className:"wrapper"},l.a.createElement(C,{results:this.state,handleChange:this.handleChange,subClick:this.subClick,handleBreakfastClick:this.handleBreakfastClick,handleLunchClick:this.handleLunchClick,handleDinnerClick:this.handleDinnerClick,handleSnackClick:this.handleSnackClick,handleSave:this.handleSave}),this.state.checkReco?l.a.createElement("div",{className:"button"},l.a.createElement("button",{className:"saveBtn",onClick:this.handleSave},"Save selection")):null,this.state.checkReco?l.a.createElement(S,null):null)}}]),a}(n.Component),j=(a(49),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"app"},l.a.createElement("h1",null,"A Bitter Parent"),l.a.createElement(F,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.e64a86f7.chunk.js.map