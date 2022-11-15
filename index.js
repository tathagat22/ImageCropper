function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        $('#my-image').attr('src', e.target.result);
        var resize = new Croppie($('#my-image')[0], {
          viewport: { 
            width: 200, 
            height: 200,
          },
          boundary: { 
            width: 300, 
            height: 300 
          },
          // showZoomer: false,
          enableResize: true,
          enableOrientation: true
        });
        $('#use').fadeIn();
        $('#use').on('click', function() {
          resize.result('base64').then(function(dataImg) {
            var data = [{ image: dataImg }, { name: 'myimgage.jpg' }];
            $('#result').attr('src', dataImg);
            // $('#imgInp').attr('value', dataImg);
          })
        })
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#inputimage").change(function() {
    readURL(this);
  });

document.querySelector('#mask1').addEventListener('click', () => {
    document.querySelector('#result').classList.add('mask1');
    document.querySelector('#result').classList.remove('mask2');
    document.querySelector('#result').classList.remove('mask3');
    document.querySelector('#result').classList.remove('mask4');
});
document.querySelector('#mask2').addEventListener('click', () => {
    document.querySelector('#result').classList.add('mask2');
    document.querySelector('#result').classList.remove('mask1');
    document.querySelector('#result').classList.remove('mask3');
    document.querySelector('#result').classList.remove('mask4');
});
document.querySelector('#mask3').addEventListener('click', () => {
    document.querySelector('#result').classList.add('mask3');
    document.querySelector('#result').classList.remove('mask1');
    document.querySelector('#result').classList.remove('mask2');
    document.querySelector('#result').classList.remove('mask4');
});
document.querySelector('#mask4').addEventListener('click', () => {
    document.querySelector('#result').classList.add('mask4');
    document.querySelector('#result').classList.remove('mask1');
    document.querySelector('#result').classList.remove('mask3');
    document.querySelector('#result').classList.remove('mask2');
});
  
