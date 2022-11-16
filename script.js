$(document).on('click', '#uploadaphoto', function () {
    document.getElementById('selectedFile').click();
});

$('#selectedFile').change(function () {
    if (this.files[0] == undefined)
      return;
    $('#imageModalContainer').modal('show');
    let reader = new FileReader();
    reader.addEventListener("load", function () {
      window.src = reader.result;
      $('#selectedFile').val('');
    }, false);
    if (this.files[0]) {
      reader.readAsDataURL(this.files[0]);
    }
});

let croppi;
$('#imageModalContainer').on('shown.bs.modal', function () {
  let width = document.getElementById('crop-image-container').offsetWidth - 20;
  $('#crop-image-container').height((width - 80) + 'px');
    croppi = $('#crop-image-container').croppie({
      viewport: {
        width: width,
        height: width 
      },
    });
  $('.modal-body1').height(document.getElementById('crop-image-container').offsetHeight + 50 + 'px');
  croppi.croppie('bind', {
    url: window.src,
  }).then(function () {
    croppi.croppie('setZoom', 0);
  });
});
$('#imageModalContainer').on('hidden.bs.modal', function () {
  croppi.croppie('destroy');
});

$(document).on('click', '.save-modal', function (ev) {
  croppi.croppie('result', {
    type: 'base64',
    format: 'jpeg',
    size: 'original'
  }).then(function (resp) {
      $('#confirm-img').attr('src', resp);
      $('.modal').modal('hide');
  });
});
document.querySelector("#mask1").addEventListener("click", () => {
  document.querySelector("#confirm-img").classList.add("mask1");
  document.querySelector("#confirm-img").classList.remove("mask2");
  document.querySelector("#confirm-img").classList.remove("mask3");
  document.querySelector("#confirm-img").classList.remove("mask4");
});
document.querySelector("#mask2").addEventListener("click", () => {
  document.querySelector("#confirm-img").classList.add("mask2");
  document.querySelector("#confirm-img").classList.remove("mask1");
  document.querySelector("#confirm-img").classList.remove("mask3");
  document.querySelector("#confirm-img").classList.remove("mask4");
});
document.querySelector("#mask3").addEventListener("click", () => {
  document.querySelector("#confirm-img").classList.add("mask3");
  document.querySelector("#confirm-img").classList.remove("mask1");
  document.querySelector("#confirm-img").classList.remove("mask2");
  document.querySelector("#confirm-img").classList.remove("mask4");
});
document.querySelector("#mask4").addEventListener("click", () => {
  document.querySelector("#confirm-img").classList.add("mask4");
  document.querySelector("#confirm-img").classList.remove("mask1");
  document.querySelector("#confirm-img").classList.remove("mask3");
  document.querySelector("#confirm-img").classList.remove("mask2");
});
document.querySelector("#nomask").addEventListener("click", () => {
  document.querySelector("#confirm-img").classList.remove("mask4");
  document.querySelector("#confirm-img").classList.remove("mask1");
  document.querySelector("#confirm-img").classList.remove("mask3");
  document.querySelector("#confirm-img").classList.remove("mask2");
});
