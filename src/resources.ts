import { ImageSource } from 'excalibur';
//@ts-ignore //disable image error highlight in vscode, because there is no error
import sword from './assets/images/sword.png'; // for parcelv2 this is configured in the .parcelrc

let Resources = {
    Sword: new ImageSource(sword),
};

export { Resources };
