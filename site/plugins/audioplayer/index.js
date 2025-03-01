panel.plugin("your-project/audioplayer-block", {
  blocks: {
    button: `
      <input
        type="text"
        placeholder="Audio file…"
        :value="content.text"
        @input="update({ text: $event.target.value })"
      />
    `,
  },
});
