import { Image } from 'react-native';

export function Logo({ wid, hei, margTop, margBot }) {
  return (
    <Image
      source={require('../../img/logo.png')}
      style={{
        width: wid,
        height: hei,
        marginTop: margTop,
        marginBottom: margBot,
      }}
    />
  );
}
