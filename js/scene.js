(function () {
  var canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isMobile = window.innerWidth < 900;

  try {
    var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: !isMobile, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
  } catch (e) {
    canvas.style.display = 'none';
    return;
  }

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 18);

  var ambientLight = new THREE.AmbientLight(0x1a2e14, 0.6);
  scene.add(ambientLight);

  var pointLight1 = new THREE.PointLight(0x3f8a35, 0.5, 40);
  pointLight1.position.set(-6, 4, 10);
  scene.add(pointLight1);

  var pointLight2 = new THREE.PointLight(0xf07a16, 0.3, 40);
  pointLight2.position.set(6, -3, 8);
  scene.add(pointLight2);

  var COLORS = {
    green: new THREE.Color(0x245f1e),
    greenLight: new THREE.Color(0x3f8a35),
    orange: new THREE.Color(0xf07a16),
    red: new THREE.Color(0xd83a2e)
  };

  var particleCount = isMobile ? 120 : 320;
  var particleGeom = new THREE.BufferGeometry();
  var positions = new Float32Array(particleCount * 3);
  var colors = new Float32Array(particleCount * 3);
  var sizes = new Float32Array(particleCount);
  var colorKeys = [COLORS.green, COLORS.greenLight, COLORS.orange, COLORS.red];

  for (var i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 28;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    var col = colorKeys[Math.floor(Math.random() * colorKeys.length)];
    colors[i * 3] = col.r;
    colors[i * 3 + 1] = col.g;
    colors[i * 3 + 2] = col.b;
    sizes[i] = Math.random() * 2.5 + 0.5;
  }

  particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particleGeom.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  particleGeom.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  var particleMat = new THREE.PointsMaterial({
    size: 0.06,
    vertexColors: true,
    transparent: true,
    opacity: 0.55,
    sizeAttenuation: true,
    depthWrite: false
  });

  var particles = new THREE.Points(particleGeom, particleMat);
  scene.add(particles);

  var lineCount = isMobile ? 12 : 28;
  var linesGroup = new THREE.Group();

  for (var l = 0; l < lineCount; l++) {
    var pts = [];
    var segments = Math.floor(Math.random() * 4) + 2;
    var startX = (Math.random() - 0.5) * 22;
    var startY = (Math.random() - 0.5) * 16;
    var startZ = (Math.random() - 0.5) * 8;

    for (var s = 0; s < segments; s++) {
      pts.push(new THREE.Vector3(
        startX + (Math.random() - 0.5) * 4,
        startY + (Math.random() - 0.5) * 3,
        startZ + (Math.random() - 0.5) * 2
      ));
    }

    var lineGeom = new THREE.BufferGeometry().setFromPoints(pts);
    var lineCol = colorKeys[l % colorKeys.length];
    var lineMat = new THREE.LineBasicMaterial({
      color: lineCol,
      transparent: true,
      opacity: 0.12 + Math.random() * 0.1
    });
    var line = new THREE.Line(lineGeom, lineMat);
    linesGroup.add(line);
  }

  scene.add(linesGroup);

  var diamondCount = isMobile ? 5 : 14;
  var shapesGroup = new THREE.Group();

  for (var d = 0; d < diamondCount; d++) {
    var size = Math.random() * 0.5 + 0.2;
    var shape;

    if (d % 3 === 0) {
      var triGeom = new THREE.BufferGeometry();
      var v = size;
      triGeom.setFromPoints([
        new THREE.Vector3(0, v, 0),
        new THREE.Vector3(-v * 0.866, -v * 0.5, 0),
        new THREE.Vector3(v * 0.866, -v * 0.5, 0),
        new THREE.Vector3(0, v, 0)
      ]);
      shape = new THREE.Line(triGeom, new THREE.LineBasicMaterial({
        color: colorKeys[d % colorKeys.length],
        transparent: true,
        opacity: 0.15
      }));
    } else if (d % 3 === 1) {
      var ringGeom = new THREE.RingGeometry(size * 0.6, size, 4);
      shape = new THREE.Mesh(ringGeom, new THREE.MeshBasicMaterial({
        color: colorKeys[d % colorKeys.length],
        transparent: true,
        opacity: 0.1,
        wireframe: true
      }));
    } else {
      var circGeom = new THREE.RingGeometry(size * 0.8, size, 24);
      shape = new THREE.Mesh(circGeom, new THREE.MeshBasicMaterial({
        color: colorKeys[d % colorKeys.length],
        transparent: true,
        opacity: 0.08,
        wireframe: true
      }));
    }

    shape.position.set(
      (Math.random() - 0.5) * 24,
      (Math.random() - 0.5) * 16,
      (Math.random() - 0.5) * 6
    );
    shape.rotation.z = Math.random() * Math.PI;
    shapesGroup.add(shape);
  }

  scene.add(shapesGroup);

  var scrollY = 0;
  var targetScrollY = 0;
  var maxScroll = 1;

  function updateScroll() {
    targetScrollY = window.pageYOffset || document.documentElement.scrollTop;
    maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
  }

  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();

  var clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    var elapsed = clock.getElapsedTime();
    scrollY += (targetScrollY - scrollY) * 0.05;
    var scrollRatio = scrollY / maxScroll;

    if (!reducedMotion) {
      particles.rotation.y = elapsed * 0.015 + scrollRatio * 0.6;
      particles.rotation.x = Math.sin(elapsed * 0.008) * 0.1;

      linesGroup.rotation.y = elapsed * 0.01 + scrollRatio * 0.4;
      linesGroup.rotation.x = Math.cos(elapsed * 0.006) * 0.05;

      shapesGroup.rotation.y = -elapsed * 0.008 + scrollRatio * 0.3;

      for (var i = 0; i < shapesGroup.children.length; i++) {
        var s = shapesGroup.children[i];
        s.rotation.z += 0.001 + i * 0.0002;
      }
    }

    camera.position.y = -scrollRatio * 4;
    camera.position.x = Math.sin(scrollRatio * Math.PI) * 1.5;

    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', function () {
    var w = window.innerWidth;
    var h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
})();
