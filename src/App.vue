<script setup>
import { ref } from 'vue';

function say(message, event = null) {
  console.log(event);
  alert(message);
}
const count = ref(0);

function increaseCount() {
  count.value += 1;
}

function increaseCountByValue(value) {
  count.value += value;
}
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold text-blue-600">Event Handling</h1>


    <div class="topic-box">
      <h2 class="topic-header">Introduction to Event Handling</h2>
      <p>
        We can handle events in Vue.js using the v-on directive or the shorthand @ symbol. This allows us to listen for user interactions such as clicks, input changes, and form submissions.
      </p>
      <p>
        Handlers can be inline JavaScript expressions or methods defined in the component's methods object.
      </p>
      <pre class="topic-code">
&lt;button v-on:click="handleClick"&gt;Click Me&lt;/button&gt
&lt;!-- or using shorthand --&gt;
&lt;button @click="handleClick"&gt;Click Me&lt;/button&gt;</pre>
    </div>

    <div class="topic-box">
      <h2 class="topic-header">Inline Event Handlers</h2>
      <p>
        Inline event handlers allow you to define the event handling logic directly within the template. This is useful for simple actions.
      </p>
      <pre class="topic-code">
&lt;button @click="count += 1"&gt;Increment&lt;/button&gt;
&lt;p&gt;Count: {{ count }}&lt;/p&gt;</pre>
    </div>

    <div class="topic-box">
      <h2 class="topic-header">Method Event Handlers</h2>
      <p>
        For more complex logic, it's better to define methods in the component and reference them in the event handlers.
      </p>
      <pre class="topic-code">
&lt;button @click="submitForm"&gt;Submit&lt;/button&gt;
&lt;script setup &gt;
function submitForm() {
      // form submission logic
    }
&lt;/script&gt;
      </pre>
    </div>

    <div class="topic-box">
      <h2 class="topic-header">Demo</h2>
      <div class="flex flex-wrap gap-4">
        <button @click="say('hello')">
          Say Hello
        </button>
        <button @click="say('Please open console and check the logs', $event)">
          Say Hello with Event
        </button>
        <button @click="count += 1">
          Increase Count ({{ count }})
        </button>
        <button @click="count -= 1">
          Decrease Count ({{ count }})
        </button>
        <button @click="increaseCount()">
          Increase Count by function ({{ count }})
        </button>
        <button @click="increaseCountByValue(10)">
          Increase Count by 10 ({{ count }})
        </button>
        <button @click="(event) => { count += 10; console.log(event); }">
          Increase with arrow fn ({{ count }})
        </button>
      </div>
    </div>

     <div class="topic-box">
      <h2 class="topic-header">Event Modifiers</h2>
      <p>
        Vue.js provides event modifiers to simplify event handling. Common modifiers include .stop, .prevent, .capture, .self, and .once.
      </p>
      <ul>
        <li>
          <span>General Modifiers</span>
          <ul>
            <li><strong>.stop</strong> - Stops the event from propagating further.</li>
            <li><strong>.prevent</strong> - Prevents the default action of the event.</li>
            <li><strong>.capture</strong> - Adds the event listener in the capture phase.</li>
            <li><strong>.self</strong> - Only triggers if the event was dispatched from the element itself.</li>
            <li><strong>.once</strong> - Ensures the event handler is only triggered once.</li>
          </ul>
        </li>
        <li>
          <span>Key Modifiers</span>
          <ul>
            <li><strong>.enter</strong> - Triggers on Enter key press.</li>
            <li><strong>.tab</strong> - Triggers on Tab key press.</li>
            <li><strong>.esc</strong> - Triggers on Escape key press.</li>
            <li><strong>.space</strong> - Triggers on Space key press.</li>
            <li><strong>.up</strong>, <strong>.down</strong>, <strong>.left</strong>, <strong>.right</strong> - Triggers on arrow key presses.</li>
            <li><strong>.delete</strong> - Triggers on Delete or Backspace key press.</li>
          </ul>
        </li>
        <li>
          <span>System Modifier Keys</span>
          <ul>
            <li><strong>.ctrl</strong> - Triggers when the Control key is pressed.</li>
            <li><strong>.alt</strong> - Triggers when the Alt key is pressed.</li>
            <li><strong>.shift</strong> - Triggers when the Shift key is pressed.</li>
            <li><strong>.meta</strong> - Triggers when the Meta key (Command on Mac, Windows key on Windows) is pressed.</li>
          </ul>
        </li>
        <li>
          <span>Exact Modifier</span>
          <ul>
            <li><strong>.exact</strong> - Ensures that only the specified system modifier keys are pressed.</li>
          </ul>
        </li>
        <li>
          <span>Mouse Button Modifiers</span>
          <ul>
            <li><strong>.left</strong> - Triggers on left mouse button click.</li>
            <li><strong>.right</strong> - Triggers on right mouse button click.</li>
            <li><strong>.middle</strong> - Triggers on middle mouse button click.</li>
          </ul>
        </li>
      </ul>
      <pre class="topic-code">
&lt;button @click.stop="handleClick"&gt;Click Me&lt;/button&gt;
&lt;form @submit.prevent="submitForm"&gt;...&lt;/form&gt;</pre>
    </div>

  </div>
</template>

<style scoped>

</style>
