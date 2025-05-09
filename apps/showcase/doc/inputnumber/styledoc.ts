import { Component } from '@angular/core';

@Component({
    selector: 'input-number-style-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>
                Following is the list of structural style classes, for theming classes visit
                <a href="#" [routerLink]="['/theming']">theming</a> page.
            </p>
        </app-docsectiontext>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>p-inputnumber</td>
                        <td>Container element</td>
                    </tr>
                    <tr>
                        <td>p-input-number-stacked</td>
                        <td>Container element with stacked buttons.</td>
                    </tr>
                    <tr>
                        <td>p-input-number-horizontal</td>
                        <td>Container element with horizontal buttons.</td>
                    </tr>
                    <tr>
                        <td>p-input-number-vertical</td>
                        <td>Container element with vertical buttons.</td>
                    </tr>
                    <tr>
                        <td>p-input-number-input</td>
                        <td>Input element</td>
                    </tr>
                    <tr>
                        <td>p-input-number-button</td>
                        <td>Input element</td>
                    </tr>
                    <tr>
                        <td>p-input-number-button-up</td>
                        <td>Increment button</td>
                    </tr>
                    <tr>
                        <td>p-input-number-button-down</td>
                        <td>Decrement button</td>
                    </tr>
                    <tr>
                        <td>p-input-number-button-icon</td>
                        <td>Button icon</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})
export class StyleDoc {}
