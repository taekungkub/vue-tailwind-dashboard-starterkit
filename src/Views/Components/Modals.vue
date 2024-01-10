<template>
  <div class="card">
    <div class="flex gap-3 mt-2">
      <button type="button" class="btn btn-primary" @click="$refs.modal_1.open()">Form Modal</button>
      <button type="button" class="btn btn-primary" @click="$refs.modal_2.open()">Basic Modal</button>
    </div>
  </div>

  <div class="card mt-3">
    <div class="text-3xl">Optional sizes</div>
    <p>
      Modals have two optional sizes, available via modifier classes to be placed on a .modal-dialog. These sizes kick in at certain breakpoints to avoid
      horizontal scrollbars on narrower viewports.
    </p>
    <div class="flex mt-2 gap-3">
      <button type="button" class="btn btn-primary" @click="$refs.modal_1.open()">XS</button>
      <button type="button" class="btn btn-primary" @click="$refs.modal_2.open()">SM</button>
      <button type="button" class="btn btn-primary" @click="$refs.modal_2.open()">MD</button>
      <button type="button" class="btn btn-primary" @click="$refs.model_size.open()">FULL</button>
    </div>
  </div>

  <div class="card mt-3">
    <div class="text-3xl">Loading Modal</div>
    <div class="flex mt-2 gap-3">
      <button type="button" class="btn btn-primary" @click="$refs.LoadingModal.open()">Loading</button>
    </div>
  </div>

  <div class="card mt-3">
    <div class="text-3xl">With v-model</div>
    <div class="flex mt-2 gap-3">
      <button type="button" class="btn btn-primary" @click="openModal = true">Open with v-model</button>
    </div>
  </div>

  <base-modal title="Modal title" ref="modal_1">
    <template #content>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div>
          <div>Name</div>
          <input type="text" class="form-control" />
        </div>
        <div>
          <div>Surname</div>
          <input type="text" class="form-control" />
        </div>
      </div>
      <br />
    </template>
  </base-modal>

  <base-modal title="Modal title" ref="modal_2">
    <template #content>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
      <br />
    </template>
  </base-modal>

  <base-modal title="Modal title" ref="model_size" width="full">
    <template #content>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
      <br />
    </template>
  </base-modal>

  <base-modal title="Modal title" ref="LoadingModal" loading>
    <template #content>
      <div class="text-center">
        <div class="text-2xl">Loading....</div>
      </div>
      <br />
    </template>
  </base-modal>

  <base-modal title="Modal title" v-model="openModal">
    <template #content>
      <div>Open with v-model modal</div>
    </template>
  </base-modal>
</template>

<script setup>
import { ref } from "vue";

const openModal = ref(false);
</script>

<style lang="scss" scoped></style>
