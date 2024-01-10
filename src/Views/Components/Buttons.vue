<template>
  <div class="bg-white rounded-lg p-3">
    <div class="flex items-center gap-4">
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-dark">Dark</button>
    </div>

    <div class="flex items-center gap-4 mt-5">
      <button type="button" class="btn btn-outline-primary">Primary</button>
      <button type="button" class="btn btn-outline-secondary">Secondary</button>
      <button type="button" class="btn btn-outline-danger">Danger</button>
      <button type="button" class="btn btn-outline-success">Success</button>
      <button type="button" class="btn btn-outline-warning">Warning</button>
      <button type="button" class="btn btn-outline-info">Info</button>
      <button type="button" class="btn btn-outline-dark">Dark</button>
    </div>

    <div class="flex items-center gap-4 mt-5">
      <button type="button" class="btn btn-primary" disabled>Primary</button>
      <button type="button" class="btn btn-secondary" disabled>Secondary</button>
      <button type="button" class="btn btn-danger" disabled>Danger</button>
      <button type="button" class="btn btn-success" disabled>Success</button>
      <button type="button" class="btn btn-warning" disabled>Warning</button>
      <button type="button" class="btn btn-info" disabled>Info</button>
      <button type="button" class="btn btn-dark" disabled>Dark</button>
    </div>

    <div class="flex items-center gap-4 mt-5">
      <button type="button" class="btn btn-primary flex items-center">
        <span class="mr-1"><i class="bx bx-link-external bx-xs"></i></span> <span>Primary</span>
      </button>

      <button type="button" class="btn btn-sm btn-icon btn-label-primary"><i class="bx bx-show-alt bx-xs"></i></button>
      <button type="button" class="btn btn-sm btn-icon btn-label-warning mx-2"><i class="bx bxs-edit bx-xs"></i></button>
      <button type="button" class="btn btn-sm btn-icon btn-label-danger"><i class="bx bx-trash-alt bx-xs"></i></button>
    </div>

    <div class="flex items-center gap-4 mt-5">
      <button type="button" class="btn btn-outline-primary btn-lg">Primary</button>
      <button type="button" class="btn btn-outline-secondary">Secondary</button>
      <button type="button" class="btn btn-outline-danger btn-sm">Danger</button>
    </div>
  </div>

  <div class="alert alert-primary">Info state. NotificationBar</div>
  <div class="alert alert-secondary">Info state. NotificationBar</div>
  <div class="alert alert-danger">Info state. NotificationBar</div>
  <div class="alert alert-success">Info state. NotificationBar</div>
  <div class="alert alert-warning">Info state. NotificationBar</div>
  <div class="alert alert-info">Info state. NotificationBar</div>

  <BaseButton label="Confirm" color="info" />
  <BaseButton label="Cancel" color="info" outline />
  <BaseButton label="Done" color="danger" />
</template>

<script setup></script>

<style lang="scss" scoped></style>
