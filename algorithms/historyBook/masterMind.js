function masterMind(initialState = {}, el) {
  const handelers = {};
  const target = el || null;
  const observe = state => new Proxy(state, {
      set(obj, key, value) {
        obj[key] = value;
        key !== '__renderCount' && handelers.render && handelers.render();
      },
    });
  const state = observe({ ...initialState, __renderCount: 0 });
  handelers.render = () => {
    if (!target) console.warn('no defined target');
    if (!handelers.template) console.warn('define a "template" before render');
    if (handelers.template && target) {
      target.innerHTML = handelers.template.bind({ state, handelers })();
      handelers.setState({ __renderCount: state.__renderCount + 1 });
      if (state.__focus) {
        const selector = document.querySelector(`[name="${state.__focus}"]`);

        selector.selectionStart = selector.value.length;
        selector.selectionEnd = selector.value.length;
        selector.focus();
      }
    }
  };
  handelers.define = (label, func) => {
    handelers[label] = func.bind({ state, handelers });
    setTimeout(handelers.render, 0);
  };
  handelers.getState = (select) => {
    let output;
    if (!select) {
      output = state;
    } else if (state[select]) {
      output = state[select];
    } else {
      output = null;
    }
    console.log(output);
  };
  handelers.setState = (obj) => {
    for (key in obj) {
      state[key] = obj[key];
    }
  };
  handelers.getHandelers = () => console.log(Object.keys(handelers));

  return handelers;
}
