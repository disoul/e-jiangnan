export default function user(state, action) {
  switch (action.type) {
    case 'USER':
      console.log(action.res);
      return {name: 'DS'};
    default:
      return {name: ''};
  }
}
