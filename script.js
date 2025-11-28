//Pratinjau Gambar
document.getElementById('imageInput').addEventListener('change', function(event){
const file = event.target.files[0];
if (file){
  const imgPreview = document.getElementById('imgPreview');
  imgPreview.src = URL.createObjectURL(file);
  imgPreview.style.display = 'block';
}
});

//Pratinjau Video
document.getElementById('videoInput').addEventListener('change', function(event){
const file = event.target.files[0];
 if (file){
  const videoPreview = document.getElementById('videoPreview');
  videoPreview.src = URL.createObjectURL(file);
  videoPreview.style.display = 'block'
 }
});
