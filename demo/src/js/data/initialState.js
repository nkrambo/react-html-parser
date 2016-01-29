const html =`
<h1>Example HTML</h1>
<p>Update this HTML to see React HTML Parser in action.</p>
<ul>
  <li>
    Elements can be nested
    <ol>
      <li>Any</li>
      <li>number</li>
      <li>of times</li>
    </ol>
  </li>
</ul>
<p>Attributes will be converted to <a href="https://facebook.github.io/react/" target="_blank">React</a> equivalent props</p>
<p style="color:red;font-size:1.2rem;">Inline styles <span style="color:blue;font-weight:bold;">can also be</span> used</p>
`.trim();

export default {
  html
};
