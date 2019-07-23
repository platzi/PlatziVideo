import gravatar from '../gravatar';

describe('Gravatar function', () => {
  it('Should return gravatar default url', () => {
    const email = 's@mpol.com';
    const gravatarDefaultImage = 'https://gravatar.com/avatar/e4ffaa3f7035953e40b6786736fbe544';
    expect(gravatar(email)).toEqual(gravatarDefaultImage);
  });
});
