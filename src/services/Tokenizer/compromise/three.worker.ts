import three from 'compromise/three';

self.onmessage = (e) => {
  const view = three(e.data);

  self.postMessage(view);
};
