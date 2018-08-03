console.log(window.innerHeight > window.innerWidth?'mobile':'PC')

if ( window.innerWidth>window.innerHeight )
    import ('./pc')
else
    import ('./mobile')