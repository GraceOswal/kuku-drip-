$(function() {

            $('.summary').hide();

            $('.cdata-overlay').hide();

            //Get inputs

            $("#checkout").click(function() {


                    let type = $(".type option:selected").val();

                    let flavour = $(".flavour option:selected").val();

                    let size = $("#size option:selected").val();

                    let softdrink = $("#softdrink option:selected").val();

                    let sideplate = $("#sideplate option:selected").val();

                    let number = $("#number").val();

                    console.log(size);



                    //Function order

                    let order = (d, t, v, w, a, total) => {

                        return { d, t, v, w, a, total };

                    };



                    //check price

                    let price, totalPrice;
                    switch (type) {
                        case type = "wet-fry":
                    }

                    switch (flavour) {

                        case flavour = "spicy":

                            switch (size) {

                                case size = "full":

                                    price = 650;

                                    if (sideplate === "fries") {

                                        totalPrice = (price * number) + 100;

                                    } else if (sideplate === "smokie") {

                                        totalPrice = (price * number) + 40;

                                    } else if (sideplate === "sausage") {

                                        totalPrice = (price * number) + 60;

                                    } else {

                                        totalPrice = (price * number) + 650;

                                    }

                                    break;

                                case size = half - kuku:

                                    price = 350;

                                    if (sideplate === "fries") {

                                        totalPrice = (price * number) + 100;

                                    } else if (sideplate === "smokie") {

                                        totalPrice = (price * number) + 40;

                                    } else if (sideplate === "bsausage") {

                                        totalPrice = (price * number) + 60;

                                    } else {

                                        totalPrice = (price * number) + 350;

                                    }

                                    break;

                                case size = "quater":

                                    price = 160;

                                    if (sideplate === "fries") {

                                        totalPrice = (price * number) + 100;

                                    } else if (sideplate === "smokie") {

                                        totalPrice = (price * number) + 40;

                                    } else if (sideplate === "sausage") {

                                        totalPrice = (price * number) + 60;

                                    } else {

                                        totalPrice = (price * number) + 160;

                                    }

                                    break;

                            }

                            break;

                    }

                    break;

                }

                switch (topping) {

                    case topping = "tomato":

                        totalPrice = totalPrice + 80;

                        break;

                    case topping = "onions":

                        totalPrice = totalPrice + 50;

                        break;

                    case topping = "mushroom":

                        totalPrice = totalPrice + 70;

                        break;

                    case topping = "greenpepper":

                        totalPrice = totalPrice + 50;

                        break;

                    case topping = "olives":

                        totalPrice = totalPrice + 400;

                        break;

                    case topping = "pineapple":

                        totalPrice = totalPrice + 300;

                        break;

                    case topping = "sweetcorn":

                        totalPrice = totalPrice + 320;

                        break;

                    case topping = "macon":

                        totalPrice = totalPrice + 170;

                        break;

                    case topping = "mince":

                        totalPrice = totalPrice + 170;

                        break;

                    case topping = "beef":

                        totalPrice = totalPrice + 200;

                        break;

                    case topping = "chicken":

                        totalPrice = totalPrice + 200;

                        break;



                }



                //Execute order function

                let newOrder = order(flavour, size, crust, topping, number, totalPrice

                    console.log(newOrder); // test func



                    //create a new object

                    // let myOrder = JSON.stringify(JSON.parse(newOrder));



                    //Write to the order

                    $('.summary').slideDown(2000);

                    $('.cdata-overlay').slideUp();

                    $('#list').slideDown();

                    $('.deliveries').show(1000);

                    $('.delivernot').show(1000);



                    $('#list').text(" ");

                    $("#list").append("<br>" + "Flavour : " + newOrder.f + "<br>" + "Size 

                        +
                        newOrder.s + "<br>" + "Crust : "

                        +
                        newOrder.c + "<br>" + "Toppings : "

                        +
                        newOrder.t + "<br>" + " Number of pizzas : "

                        +
                        newOrder.n + "<br>" + "Total Price /= : "

                        +
                        newOrder.total + "<br><br>").css('font-family', 'system-ui').css('fo

                    });



                //Deliver

                $(".deliver").click(function() {

                    $('.summary').slideUp();

                    $('#list').slideUp();

                    $('.summary').text("Provide location details").slideDown();

                    $('.deliver').hide(1000);

                    $('.delivernot').hide(1000);

                    $('.cdata-overlay').slideDown();

                });





                //Pick Up

                $(".delivernot").click(function() {



                });



                //Scrollify

                $(function() {

                    $.scrollify.move('#sum-order');

                });

            });