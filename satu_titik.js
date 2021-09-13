function main(){
   //akses kanvas html dengan id
   var canvas = document.getElementById("kiki");
   //menyediakan alat gambar
   var konteks = canvas.getContext("webgl");
   
   //mendefinisikan posisi dan ukuran titik
   var vertextShaderCode = `
   void main(){
      //posisi homogen (x,y,z,homogen/proyeksi(nilainya 0-1))
      gl_Position = vec4(0.0,0.0,0.0,1.0);
      //ukuran titik
      gl_PointSize = 10.0;
   }`;

   //membuat titik
   var vertexShader = konteks.createShader(konteks.VERTEX_SHADER);
   konteks.shaderSource(vertexShader, vertextShaderCode);
   //compile shader
   konteks.compileShader(vertexShader);

   //mendefinisikan warna
   var fragmentShaderCode = `
   void main(){
      // warna (R,G,B,Opacity/Alpha)
      gl_FragColor = vec4(1.0,0.0,0.0,1.0);
   }`;

   //membuat warna
   var fragmentShader = konteks.createShader(konteks.FRAGMENT_SHADER); 
   konteks.shaderSource(fragmentShader,fragmentShaderCode);
   konteks.compileShader(fragmentShader);

   //membuat program agar data bisa di eksekusi
   var shaderProgram = konteks.createProgram();
   konteks.attachShader(shaderProgram,vertexShader);
   konteks.attachShader(shaderProgram,fragmentShader);
   konteks.linkProgram(shaderProgram);
   konteks.useProgram(shaderProgram);

   // clear background
   konteks.clearColor(0.0,0.0,1.0,1.0);
   konteks.clear(konteks.COLOR_BUFFER_BIT);

   // execute gambar
   konteks.drawArrays(konteks.POINTS,0,1);

}
