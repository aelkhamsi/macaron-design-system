import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: 'ds-button',
  styleUrl: './button.scss',
  shadow: true,
})
export class Button {
  @Prop() label: string;

  render() {
    return (
      <div class='button'>
        {this.label}
      </div>
    )
  }
}
