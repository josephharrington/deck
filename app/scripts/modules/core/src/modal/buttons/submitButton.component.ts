import { IComponentOptions, module } from 'angular';

export class SubmitButtonComponent implements IComponentOptions {
  public bindings: any = {
    onClick: '&',
    isDisabled: '<',
    isNew: '<',
    submitting: '<',
    label: '<',
  };
  public template = `
    <button class="btn btn-primary" ng-disabled="$ctrl.isDisabled" ng-click="$ctrl.onClick()">
      <i ng-if="!$ctrl.submitting" class="far fa-check-circle"></i>
      <button-busy-indicator ng-if="$ctrl.submitting"></button-busy-indicator>
      {{$ctrl.label || ($ctrl.isNew ? 'Create' : 'Update')}}
    </button>`;
}

export const SUBMIT_BUTTON_COMPONENT = 'spinnaker.core.modal.buttons.submitButton.component';
module(SUBMIT_BUTTON_COMPONENT, [])
  .component('submitButton', new SubmitButtonComponent());
