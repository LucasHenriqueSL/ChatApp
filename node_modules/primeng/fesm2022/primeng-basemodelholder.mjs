import * as i0 from '@angular/core';
import { signal, computed, Directive } from '@angular/core';
import { isNotEmpty } from '@primeuix/utils';
import { BaseComponent } from 'primeng/basecomponent';

class BaseModelHolder extends BaseComponent {
    modelValue = signal(undefined, ...(ngDevMode ? [{ debugName: "modelValue" }] : /* istanbul ignore next */ []));
    $filled = computed(() => isNotEmpty(this.modelValue()), ...(ngDevMode ? [{ debugName: "$filled" }] : /* istanbul ignore next */ []));
    writeModelValue(value) {
        this.modelValue.set(value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.13", ngImport: i0, type: BaseModelHolder, deps: null, target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.13", type: BaseModelHolder, isStandalone: true, usesInheritance: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.13", ngImport: i0, type: BaseModelHolder, decorators: [{
            type: Directive,
            args: [{ standalone: true }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BaseModelHolder };
//# sourceMappingURL=primeng-basemodelholder.mjs.map
