import {HomeComponent} from "../src/app/home/home.component";
import {moduleMetadata} from "@storybook/angular";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export default {
  title: 'Home component',
  decorators: [moduleMetadata({ imports: [BrowserAnimationsModule] })],
};

export const WithDefaultInput = () => ({
  component: HomeComponent,
  props: {},
});

export const WithCustomInput = () => ({
  component: HomeComponent,
  props: {
    // extendedMode: boolean('extendedMode', false), // for addon knobs
    input: 'this is a custom input'
  },
});
