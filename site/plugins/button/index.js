panel.plugin("your-project/button-block", {
  blocks: {
    button: `
      <input
        type="text"
        placeholder="Button text …"
        :value="content.text"
        @input="update({ text: $event.target.value })"
      />
    `
  }
});
