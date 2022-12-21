import Swal from "sweetalert2";

export const Alert = () => {


    Swal.fire({
        title: `READY to take off!!!`,
        text: 'Lets start a business together',
        imageUrl: 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.18169-9/65282_4934188424778_1772168318_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=de6eea&_nc_ohc=KDCGY4Kcd7IAX9kc4bM&_nc_ht=scontent-arn2-1.xx&oh=00_AfABkfOHHL6xglihrxicUjDGdZbXdnBctx9lbOWNhksxrg&oe=63CA4B7E',

    })

    const changeTilte = (title, time) => {
        setTimeout(()=> {
            Swal.update({
                    title: title,
                }
            )
        }, time)
    }

    setTimeout(()=> {
        Swal.update({
                icon: 'success',
                confirmButtonText: 'COUNT ME IN'
            }
        )
    }, 12000)

    setTimeout(()=> {
        Swal.update({
            imageUrl: 'https://scontent-arn2-1.xx.fbcdn.net/v/t31.18172-8/920008_10200318465216510_477213790_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=de6eea&_nc_ohc=rZ5eATHFC-YAX_NVSXf&_nc_ht=scontent-arn2-1.xx&oh=00_AfDoPb5dczl_3NAc6YNlVg8kYYvI8e4TK6JD4ke7M0BviA&oe=63CA68EC',
            }
        )
    }, 6000)

    setTimeout(()=> {
        Swal.update({
                imageUrl: 'https://i.ibb.co/56fB8Qp/jan-frederik.png',
            }
        )
    }, 8500)

    changeTilte('10', 2000)
    changeTilte('9', 3000)
    changeTilte('8', 4000)
    changeTilte('Hurtig brillerne på!', 5000)
    changeTilte('6', 6000)
    changeTilte('5', 7000)
    changeTilte('Din makker er klar', 8000)
    changeTilte('3', 9000)
    changeTilte('2', 10000)
    changeTilte('1', 11000)
    changeTilte('Velkommen til din nye e commerce', 12000)
}