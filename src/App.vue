<script setup>

</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold text-blue-600">Conditional Rendering</h1>


    <div class="topic-box">
      <h2 class="topic-header">v-if Directive</h2>

      <p class="topic-description">
        The <code>v-if</code> directive is used to conditionally render elements based on a boolean expression. If the expression evaluates to true, the element is rendered; otherwise, it is not included in the DOM.
      </p>

      <pre class="topic-code">
&lt;template&gt;
  &lt;div v-if="isVisible"&gt;
    This content is visible.
  &lt;/div&gt;
&lt;/template&gt;
      </pre>

    </div>

    <div class="topic-box">
      <h2 class="topic-header">v-else Directive</h2>

      <p class="topic-description">
        The <code>v-else</code> directive is used in conjunction with <code>v-if</code> to provide an alternative block of content that will be rendered when the <code>v-if</code> condition is false.
      </p>

      <pre class="topic-code">
&lt;template&gt;
  &lt;div v-if="isVisible"&gt;
    This content is visible.
  &lt;/div&gt;
  &lt;div v-else&gt;
    This content is hidden.
  &lt;/div&gt;
&lt;/template&gt;
      </pre>

    </div>


    <div class="topic-box">
      <h2 class="topic-header">v-else-if Directive</h2>

      <p class="topic-description">
        The <code>v-else-if</code> directive allows you to chain multiple conditional blocks together. It works similarly to <code>else if</code> in traditional programming languages.
      </p>

      <pre class="topic-code">
&lt;template&gt;
  &lt;div v-if="conditionA"&gt;
    Condition A is true.
  &lt;/div&gt;
  &lt;div v-else-if="conditionB"&gt;
    Condition B is true.
  &lt;/div&gt;
  &lt;div v-else&gt;
    Neither condition is true.
  &lt;/div&gt;
&lt;/template&gt;
      </pre>

    </div>

    <div class="topic-box">
      <h2 class="topic-header">v-show Directive</h2>

      <p class="topic-description">
        The <code>v-show</code> directive is used to toggle the visibility of an element by changing its CSS display property. Unlike <code>v-if</code>, it does not remove the element from the DOM.
      </p>

      <pre class="topic-code">
&lt;template&gt;
  &lt;div v-show="isVisible"&gt;
    This content is visible.
  &lt;/div&gt;
&lt;/template&gt;
      </pre>  

    </div>

    <div class="topic-box">
      <h2 class="topic-header">v-if with Template </h2>

      <p class="topic-description">
        The <code>v-if</code> directive can be used with the <code>&lt;template&gt;</code> element to conditionally render multiple elements as a single block.
      </p>

      <pre class="topic-code">
&lt;template&gt;
  &lt;template v-if="isVisible"&gt;
    &lt;h3&gt;This is a heading&lt;/h3&gt;
    &lt;p&gt;This is a paragraph.&lt;/p&gt;
  &lt;/template&gt;
&lt;/template&gt;
      </pre>

    </div>

  </div>
</template>

<style scoped>

</style>
