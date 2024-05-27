class Pyramid {
  constructor() {
    this.type = 'pyramid';
    this.color = [1.0, 1.0, 1.0, 1.0];
    this.matrix = new Matrix4();
    this.normalMatrix = new Matrix4();
    this.vertices = [
      // Front face
      0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.5, 0.5, 0.5,
      // Right face
      1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.5, 0.5, 0.5,
      // Back face
      1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.5, 0.5, 0.5,
      // Left face
      0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.5, 0.5, 0.5,
      // Bottom face
      0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0
    ];
    this.uv = [
      // Front face
      0.5, 0.0, 1.0, 1.0, 0.0, 1.0,
      // Right face
      0.5, 0.0, 1.0, 1.0, 0.0, 1.0,
      // Back face
      0.5, 0.0, 1.0, 1.0, 0.0, 1.0,
      // Left face
      0.5, 0.0, 1.0, 1.0, 0.0, 1.0,
      // Bottom face
      0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0
    ];
    this.normal = [//I used AI to get the normals for the pyramid
      // Front face
      0.0, 0.4472, 0.8944, 0.0, 0.4472, 0.8944, 0.0, 0.4472, 0.8944,
      // Right face
      0.8944, 0.4472, 0.0, 0.8944, 0.4472, 0.0, 0.8944, 0.4472, 0.0,
      // Back face
      0.0, 0.4472, -0.8944, 0.0, 0.4472, -0.8944, 0.0, 0.4472, -0.8944,
      // Left face
      -0.8944, 0.4472, 0.0, -0.8944, 0.4472, 0.0, -0.8944, 0.4472, 0.0,
      // Bottom face
      0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0
    ];
    this.textureNum = -2;
  }

  render() {
    var rgba = this.color;
    gl.uniform1i(u_whichTexture, this.textureNum);

    this.normalMatrix.setInverseOf(this.matrix);
    this.normalMatrix.transpose();

    gl.uniformMatrix4fv(u_NormalMatrix, false, this.normalMatrix.elements);

    gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
    gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);

    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
    gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_Position);

    var uvBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.uv), gl.STATIC_DRAW);
    gl.vertexAttribPointer(a_UV, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_UV);

    var normalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.normal), gl.STATIC_DRAW);
    gl.vertexAttribPointer(a_Normal, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_Normal);

    gl.drawArrays(gl.TRIANGLES, 0, 18);
  }
}