export let 
model1 =`<button type="button" class="btn btn-primary" data-bs-toggle="modal" (click)="open(content)"
data-bs-target="#exampleModal">
Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
        <ng-template #content let-c="close" let-d="dismiss">
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalLabel1">Modal title</h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="d('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="c('Closelick')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save
                    changes</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,
model2 =`<button type="button" class="btn btn-primary" data-bs-toggle="modal" (click)="open(content1)"
data-bs-target="#staticBackdrop">
Launch static backdrop modal
</button>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
        <ng-template #content1 let-c="close" let-d="dismiss">
            <div class="modal-header">
                <h6 class="modal-title" id="staticBackdropLabel">Modal title
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="d('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>I will not close if you click outside me. Don't even try to
                    press
                    escape key.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="c('Closelick')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Understood</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,
model3 =`<button type="button" class="btn btn-primary" data-bs-toggle="modal"
(click)="openScrollableContent(longContent)" data-bs-target="#exampleModalScrollable">
Scrolling long content
</button>
<div class="modal fade" id="exampleModalScrollable" tabindex="-1" aria-labelledby="exampleModalScrollable"
data-bs-keyboard="false" aria-hidden="true">
<div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
        <ng-template #longContent let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="staticBackdropLabel1">Modal title
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Libero
                    ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
                    nisi
                    ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                    voluptatibus, ipsam quo est rerum modi quos expedita facere,
                    ex
                    tempore fuga similique ipsa blanditiis et accusamus
                    temporibus
                    commodi voluptas! Nobis veniam illo architecto expedita quam
                    ratione quaerat omnis. In, recusandae eos! Pariatur,
                    deleniti
                    quis ad nemo ipsam officia temporibus, doloribus fuga
                    asperiores
                    ratione distinctio velit alias hic modi praesentium aperiam
                    officiis eaque, accusamus aut. Accusantium assumenda,
                    commodi
                    nulla provident asperiores fugit inventore iste amet aut
                    placeat
                    consequatur reprehenderit. Ratione tenetur eligendi, quis
                    aperiam dolores magni iusto distinctio voluptatibus minus a
                    unde
                    at! Consequatur voluptatum in eaque obcaecati, impedit
                    accusantium ea soluta, excepturi, quasi quia commodi
                    blanditiis?
                    Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                    consequuntur quod quo veniam? Labore dignissimos reiciendis
                    accusamus recusandae est consequuntur iure.</p>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save
                    Changes</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,
model4 =`<button type="button" class="btn btn-primary" data-bs-toggle="modal"
(click)="openVerticallyCentered(Content2)" data-bs-target="#exampleModalScrollable2">
Vertically centered modal
</button>
<div class="modal fade" id="exampleModalScrollable2" tabindex="-1" aria-labelledby="exampleModalScrollable2"
data-bs-keyboard="false" aria-hidden="true">
<!-- Scrollable modal -->
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <ng-template #Content2 let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="staticBackdropLabel2">Modal title
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Libero
                    ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
                    nisi
                    ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save
                    Changes</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,
model5 =`<button type="button" class="btn btn-primary" data-bs-toggle="modal" (click)="VerticallyScrol(Content3)"
data-bs-target="#exampleModalScrollable3">
Vertically centered scrollable modal
</button>
<div class="modal fade" id="exampleModalScrollable3" tabindex="-1" aria-labelledby="exampleModalScrollable3"
data-bs-keyboard="false" aria-hidden="true">
<!-- Scrollable modal -->
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
        <ng-template #Content3 let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="staticBackdropLabel3">Modal title
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                    voluptatibus, ipsam quo est rerum modi quos expedita facere,
                    ex
                    tempore fuga similique ipsa blanditiis et accusamus
                    temporibus
                    commodi voluptas! Nobis veniam illo architecto expedita quam
                    ratione quaerat omnis. In, recusandae eos! Pariatur,
                    deleniti
                    quis ad nemo ipsam officia temporibus, doloribus fuga
                    asperiores
                    ratione distinctio velit alias hic modi praesentium aperiam
                    officiis eaque, accusamus aut. Accusantium assumenda,
                    commodi
                    nulla provident asperiores fugit inventore iste amet aut
                    placeat
                    consequatur reprehenderit. Ratione tenetur eligendi, quis
                    aperiam dolores magni iusto distinctio voluptatibus minus a
                    unde
                    at! Consequatur voluptatum in eaque obcaecati, impedit
                    accusantium ea soluta, excepturi, quasi quia commodi
                    blanditiis?
                    Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                    consequuntur quod quo veniam? Labore dignissimos reiciendis
                    accusamus recusandae est consequuntur iure.</p>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save
                    Changes</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,
model6 =`<button type="button" class="btn btn-primary" data-bs-toggle="modal" (click)="Tooltippopover(Content4)"
data-bs-target="#exampleModalScrollable4">
Launch demo modal
</button>
<div class="modal fade" id="exampleModalScrollable4" tabindex="-1" aria-labelledby="exampleModalScrollable4"
data-bs-keyboard="false" aria-hidden="true">
<!-- Scrollable modal -->
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
        <ng-template #Content4 let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="staticBackdropLabel4">Modal title
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <h5>Popover in a modal</h5>
                <p>This <a href="javascript:void(0);" role="button" class="btn btn-secondary"
                        data-bs-toggle="popover" popoverTitle="Popover title"
                        ngbPopover="Popover body content is set in this attribute.">button</a>
                    triggers a popover on click.</p>
                <hr>
                <h5>Tooltips in a modal</h5>
                <p><a href="javascript:void(0);" class="text-primary" data-bs-toggle="tooltip"
                        ngbTooltip="Tooltip">This
                        link</a> and <a href="javascript:void(0);" class="text-primary"
                        data-bs-toggle="tooltip" ngbTooltip="Tooltip">that link</a> have tooltips on
                    hover.
                </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save
                    Changes</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,
model7 =`<button type="button" class="btn btn-primary" data-bs-toggle="modal" (click)="UsingGrid(Content5)"
data-bs-target="#exampleModalScrollable5">
Launch demo modal
</button>
<div class="modal fade" id="exampleModalScrollable5" tabindex="-1" aria-labelledby="exampleModalScrollable5"
data-bs-keyboard="false" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
        <ng-template #Content5 let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="staticBackdropLabel5">Modal title
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close">
                </button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4 bg-light border">.col-md-4</div>
                        <div class="col-md-4 ms-auto bg-light border">.col-md-4
                            .ms-auto</div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-3 ms-auto bg-light border">.col-md-3
                            .ms-auto</div>
                        <div class="col-md-2 ms-auto bg-light border">.col-md-2
                            .ms-auto</div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6 ms-auto bg-light border">.col-md-6
                            .ms-auto</div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-9 bg-light border">
                            Level 1: .col-sm-9
                            <div class="row">
                                <div class="col-8 col-sm-6 bg-light border">
                                    Level 2: .col-8 .col-sm-6
                                </div>
                                <div class="col-4 col-sm-6 bg-light border">
                                    Level 2: .col-4 .col-sm-6
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save
                    Changes</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,
model8 =`<a class="btn btn-primary" data-bs-toggle="modal" (click)=" ToggleModals(Content6)" role="button">Open
first modal
</a>
<div class="modal fade" id="exampleModalToggle" aria-labelledby="exampleModalToggleLabel" tabindex="-1"
aria-hidden="true" style="display: none;">
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <ng-template #Content6 let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalToggleLabel">Modal 1
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Show a second modal and hide this one with the button below.
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" data-bs-target="#exampleModalToggle2"
                    (click)=" ToggleModals2(Content8)" data-bs-toggle="modal">Open second
                    modal</button>
            </div>
        </ng-template>
    </div>
</div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-labelledby="exampleModalToggleLabel2" tabindex="-1"
aria-hidden="true" style="display: none;">
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <ng-template #Content8 let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalToggleLabel2">Modal 2
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Hide this modal and show the first with the button below.
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" data-bs-target="#exampleModalToggle"
                    (click)=" ToggleModals(Content6)" data-bs-toggle="modal">Back to first</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,
model9 =`<button type="button" class="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target="#exampleModalXl"
(click)="openXl(Content7)">Extra large modal</button>
<button type="button" class="btn btn-secondary m-1" data-bs-toggle="modal" data-bs-target="#exampleModalLg"
(click)="openLg(Content10)">Large modal</button>
<button type="button" class="btn btn-warning m-1" (click)="opensm(Content9)" data-bs-toggle="modal"
data-bs-target="#exampleModalSm">Small modal</button>
<div class="modal fade" id="exampleModalXl" tabindex="-1" aria-labelledby="exampleModalXlLabel"
style="display: none;" aria-hidden="true">
<div class="modal-dialog modal-xl">
    <ng-template #Content7 let-modal>
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalXlLabel">Extra large
                    modal</h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
        </div>
    </ng-template>
</div>
</div>
<div class="modal fade" id="exampleModalLg" tabindex="-1" aria-labelledby="exampleModalLgLabel"
aria-hidden="true">
<div class="modal-dialog modal-lg">
    <div class="modal-content">
        <ng-template #Content10 let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalLgLabel">Large modal
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
        </ng-template>
    </div>
</div>
</div>
<div class="modal fade" id="exampleModalSm" tabindex="-1" aria-labelledby="exampleModalSmLabel"
aria-hidden="true">
<div class="modal-dialog modal-sm">
    <div class="modal-content">
        <ng-template #Content9 let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalSmLabel">Small modal
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
        </ng-template>
    </div>
</div>
</div>`,
model10 =`<div class="bd-example">
<button type="button" class="btn btn-primary mb-1 me-1" data-bs-toggle="modal"
    data-bs-target="#exampleModalFullscreen" (click)="Fullscreen(Content11)">Full screen</button>
<button type="button" class="btn btn-secondary mb-1 me-1" data-bs-toggle="modal"
    data-bs-target="#exampleModalFullscreenSm" (click)="FullscreenSm(Content12)">Full screen below
    sm</button>
<button type="button" class="btn btn-warning mb-1 me-1" data-bs-toggle="modal"
    data-bs-target="#exampleModalFullscreenMd" (click)="FullscreenMd(Content13)">Full screen below
    md</button>
<button type="button" class="btn btn-info mb-1 me-1" data-bs-toggle="modal"
    data-bs-target="#exampleModalFullscreenLg" (click)="FullscreenLg(Content14)">Full screen below
    lg</button>
<button type="button" class="btn btn-success mb-1 me-1" data-bs-toggle="modal"
    data-bs-target="#exampleModalFullscreenXl" (click)="FullscreenXl(Content15)">Full screen below
    xl</button>
<button type="button" class="btn btn-danger mb-1 me-1" data-bs-toggle="modal"
    data-bs-target="#exampleModalFullscreenXxl" (click)="FullscreenXXl(Content16)">Full screen below
    xxl</button>
</div>
<div class="modal fade" id="exampleModalFullscreen" tabindex="-1"
aria-labelledby="exampleModalFullscreenLabel" aria-hidden="true" style="display: none;">
<div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
        <ng-template #Content11 let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalFullscreenLabel">Full
                    screen modal</h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
            </div>
        </ng-template>
    </div>
</div>
</div>

<div class="modal fade" id="exampleModalFullscreenSm" tabindex="-1"
aria-labelledby="exampleModalFullscreenSmLabel" aria-hidden="true" style="display: none;">
<div class="modal-dialog modal-fullscreen-sm-down">
    <ng-template #Content12 let-modal>
        <div class="modal-content">

            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalFullscreenSmLabel">
                    Full
                    screen below sm</h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
            </div>

        </div>
    </ng-template>
</div>
</div>
<div class="modal fade" id="exampleModalFullscreenMd" tabindex="-1"
aria-labelledby="exampleModalFullscreenMdLabel" aria-hidden="true" style="display: none;">
<div class="modal-dialog modal-fullscreen-md-down">
    <ng-template #Content13 let-modal>
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalFullscreenMdLabel">
                    Full
                    screen below md</h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </ng-template>
</div>
</div>
<div class="modal fade" id="exampleModalFullscreenLg" tabindex="-1"
aria-labelledby="exampleModalFullscreenLgLabel" aria-hidden="true" style="display: none;">
<div class="modal-dialog modal-fullscreen-lg-down">
    <ng-template #Content14 let-modal>
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalFullscreenLgLabel">
                    Full
                    screen below lg</h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </ng-template>
</div>
</div>
<div class="modal fade" id="exampleModalFullscreenXl" tabindex="-1"
aria-labelledby="exampleModalFullscreenXlLabel" aria-hidden="true" style="display: none;">
<div class="modal-dialog modal-fullscreen-xl-down">
    <ng-template #Content15 let-modal>
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalFullscreenXlLabel">
                    Full
                    screen below xl</h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </ng-template>
</div>
</div>
<div class="modal fade" id="exampleModalFullscreenXxl" tabindex="-1"
aria-labelledby="exampleModalFullscreenXxlLabel" aria-hidden="true" style="display: none;">
<div class="modal-dialog modal-fullscreen-xxl-down">
    <ng-template #Content16 let-modal>
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalFullscreenXxlLabel">
                    Full
                    screen below xxl</h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </ng-template>
</div>
</div>`,
model11 =`<button type="button" class="btn btn-primary mb-1 me-1" data-bs-toggle="modal" (click)="openMdo(Content17)"
data-bs-target="#formmodal" data-bs-whatever="@mdo">Open modal for
mdo</button>
<button type="button" class="btn btn-secondary mb-1 me-1" data-bs-toggle="modal"
(click)="openFat(Content18)" data-bs-target="#formmodal" data-bs-whatever="@fat">Open modal for
fat</button>
<button type="button" class="btn btn-light mb-1 me-1" data-bs-toggle="modal"
(click)="opengetbootstrap(Content19)" data-bs-target="#formmodal" data-bs-whatever="@getbootstrap">Open
modal for
getbootstrap</button>
<div class="modal fade" id="formmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
    <ng-template #Content17 let-modal>
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalLabel">New message to mdo</h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Recipient:</label>
                        <input type="text" class="form-control" id="recipient-name" value="@mdo">
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Message:</label>
                        <textarea class="form-control" id="message-text"></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Send
                    message</button>
            </div>
        </div>
    </ng-template>
</div>
</div>
<div class="modal fade" id="formmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
    <ng-template #Content18 let-modal>
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalLabel">New message to &#64;fat</h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Recipient:</label>
                        <input type="text" class="form-control" id="recipient-name" value="@fat">
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Message:</label>
                        <textarea class="form-control" id="message-text"></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Send
                    message</button>
            </div>
        </div>
    </ng-template>
</div>
</div>
<div class="modal fade" id="formmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
    <ng-template #Content19 let-modal>
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalLabel">New message to &#64;getbootstrap</h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Recipient:</label>
                        <input type="text" class="form-control" id="recipient-name"
                            value="@getbootstrap">
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Message:</label>
                        <textarea class="form-control" id="message-text"></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Send
                    message</button>
            </div>
        </div>
    </ng-template>
</div>
</div>`,
model12 =`<div class="row ">
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-scale"
        data-bs-toggle="modal" (click)="openScale(scale)">Scale</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-slide-in-right"
        data-bs-toggle="modal" (click)="openSlideRight(right)">Slide In Right</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-slide-in-bottom"
        data-bs-toggle="modal" (click)="openSlideBottom(bottom)">Slide In Bottom</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-newspaper"
        data-bs-toggle="modal" (click)="openNewspaper(newspaper)">News paper</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-fall"
        data-bs-toggle="modal" (click)="openFall(fall)">Fall</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-flip-horizontal"
        data-bs-toggle="modal" (click)="openFlipHorizontal(flip)">Flip Horizontal</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-flip-vertical"
        data-bs-toggle="modal" (click)="openFlipVertical(flipV)">Flip Vertical</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-super-scaled"
        data-bs-toggle="modal" (click)="openSuperScaled(super)">Super Scaled</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-sign"
        data-bs-toggle="modal" (click)="openSign(sign)">Sign</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-rotate-bottom"
        data-bs-toggle="modal" (click)="openRotateBottom(bottom)">Rotate Bottom</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-rotate-left"
        data-bs-toggle="modal" (click)="openRotateLeft(left)">Rotate Left</a>
</div>
</div>
<div class="modal fade" id="modaldemo8">
<div class="modal-dialog modal-dialog-centered text-center" role="document">
    <div class="modal-content modal-content-demo">
        <ng-template #scale let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #right let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #bottom let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #newspaper let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #fall let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #flip let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #flipV let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #super let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #sign let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #left let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
</div>

</div>`,
model13 =` <button type="button" class="btn-close" aria-label="Close"></button>`,
model14 =`<button type="button" class="btn-close" disabled aria-label="Close"></button>`,
model15 =` <button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
<button type="button" class="btn-close btn-close-white" disabled aria-label="Close"></button>

//card-body class = "bg-black"`;