/* Data types in JS: undefined,boolean,object  */

/*let matn = "Salom";*/
/*let raqam = 12345;*/
/*let soz;*/
/*document.write(typeof soz);*/

/*let rost = true;*/        /* true & false */
/*let rost = 45 == 45?true:false;*/
/*document.write(rost);*/

/*let arrayObject = [45,78,'salom','matn',true,false,'javascript','olma',123];*/
/*console.log(arrayObject[3]);*/
/*let oddiyObject = {ism: "Islom", yoshi: 18, mahallasi: "Oltintopgan", dusti: "Sardor"};*/ /* key,value */
/*console.log(oddiyObject.ism, oddiyObject.dusti, oddiyObject.mahallasi);*/

/* Functions in JS */

/*function savatchaniTekshir(uzatilganContainer=[12,"text",true,false,80,8]) {
    if (uzatilganContainer.length == 0){
        document.write("Savatchaning ichida " + uzatilganContainer.length + " dona ma'lumot bor!");
    }else{
        document.write("Savatchaning ichida " + uzatilganContainer.length + " ta ma'lumot bor!");
    }
}
let container = [12,78,"matn",true];
savatchaniTekshir();*/

/* Date in JS */

let sana = new Date();

sana.setFullYear(2005);
sana.setMonth();
sana.setDate();

let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun = sana.getDate();
let haftaKuni = sana.getDay();

let oylar = ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr","dekabr"];
let kunlar = ["yakshanba","dushanba","seshanba","chorshanba","payshanba","juma","shanba"]

document.write("Bugun " + yil + "-yil " + oylar[oy] + "ning " + kun + "-kuni. Haftaning " + kunlar[haftaKuni] + " kuni.");


