<template>
  <div class="bg-white p-5 rounded-lg mt-5">
    <div class="grid grid-cols-2 gap-3">
      <FormField label="Grouped with icons">
        <FormControl v-model="form.name" :icon="'bxs-user'" />
      </FormField>
      <FormField label="Email" help="">
        <FormControl v-model="form.email" type="email" :icon="'bxs-envelope'" />
      </FormField>
    </div>

    <FormField label="With help line" help="Do not enter the leading zero">
      <FormControl v-model="form.phone" type="tel" placeholder="Your phone number" />
    </FormField>

    <FormField label="Dropdown">
      <FormControl v-model="form.department" :options="selectOptions" />
    </FormField>

    <FormField label="Question" help="Your question. Max 255 characters">
      <FormControl type="textarea" placeholder="Explain how we can help you" />
    </FormField>
  </div>

  <div class="bg-white p-5 rounded-lg mt-5">
    <div class="text-2xl mb-5">Formkit</div>
    <FormKit type="form" id="myForm" incomplete-message="" :actions="false" @submit="submitHandler" #default="{ value }">
      <h1>Register!</h1>
      <p>You can put any type of element inside a form, not just FormKit inputs (although only FormKit inputs are included with the submission).</p>
      <br />
      <hr />
      <br />
      <FormKit type="text" name="name" label="Your name" placeholder="Jane Doe" v-model="newUser.name" validation="required" />
      <FormKit type="text" name="email" label="Your email" placeholder="jane@example.com" v-model="newUser.email" validation="required|email" />
      <div class="double">
        <FormKit
          type="password"
          name="password"
          label="Password"
          validation="required|length:6|matches:/[^a-zA-Z]/"
          :validation-messages="{
            matches: 'Please include at least one symbol',
          }"
          placeholder="Your password"
          v-model="newUser.password"
        />
        <FormKit
          type="password"
          name="password_confirm"
          label="Confirm password"
          placeholder="Confirm password"
          v-model="newUser.cfpassword"
          validation="required|confirm"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </FormKit>

    {{ newUser }}
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

import FormCheckRadioGroup from "../components/FormCheckRadioGroup.vue";
import FormFilePicker from "../components/FormFilePicker.vue";
import FormField from "../components/FormField.vue";
import FormControl from "../components/FormControl.vue";
import { reset } from "@formkit/core";
const selectOptions = [
  { id: 1, label: "Business development" },
  { id: 2, label: "Marketing" },
  { id: 3, label: "Sales" },
];

const form = reactive({
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "",
  department: selectOptions[0],
  subject: "",
  question: "",
});

const newUser = reactive({
  name: "",
  email: "",
  password: "",
  cfpassword: "",
});

function submitHandler(values) {
  //do something with the form data
  console.log(values);
  reset("myForm");
}
</script>

<style lang="scss" scoped></style>
