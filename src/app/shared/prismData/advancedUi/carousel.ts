export let 
carousel1 =`<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
@if(images5){
<ngb-carousel class="carousel-inner" [interval]="3000" [showNavigationArrows]="false"
    [showNavigationIndicators]="false">

    @for (image of images5; track images5) {
    <ng-template ngbSlide class="carousel-item active">
        <img [src]="image.src" class="d-block w-100" alt="...">
    </ng-template>
    }
</ngb-carousel>
}
</div>`,
carousel2 =`<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">

@if(images6){
<ngb-carousel class="carousel-inner" [interval]="3000" [showNavigationArrows]="true"
    [showNavigationIndicators]="false">
    @for (image of images6; track images6) {
    <ng-template ngbSlide class="carousel-item active">
        <img [src]="image.src" class="d-block w-100" alt="...">
    </ng-template>
    }
</ngb-carousel>
}

</div>`,
carousel3 =`@if (images2) {
    <ngb-carousel>
        <ng-template ngbSlide>
            <div class="picsum-img-wrapper">
                <img src="./assets/images/media/media-25.jpg" class="d-block w-100" alt="..." />
            </div>
        </ng-template>
        <ng-template ngbSlide>
            <div class="picsum-img-wrapper">
                <img src="./assets/images/media/media-29.jpg" class="d-block w-100" alt="..." />
            </div>

        </ng-template>
        <ng-template ngbSlide>
            <div class="picsum-img-wrapper">
                <img src="./assets/images/media/media-30.jpg" class="d-block w-100" alt="..." />
            </div>

        </ng-template>
    </ngb-carousel>
    }`,
carousel4 =`@if (images4) {
    <ngb-carousel>
        <ng-template ngbSlide>
            <div class="picsum-img-wrapper">
                <img src="./assets/images/media/media-59.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-caption d-none d-md-block">
                <h3 class="text-fixed-white">First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
        </ng-template>
        <ng-template ngbSlide>
            <div class="picsum-img-wrapper">
                <img src="./assets/images/media/media-60.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-caption d-none d-md-block">
                <h3 class="text-fixed-white">Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </ng-template>
        <ng-template ngbSlide>
            <div class="picsum-img-wrapper">
                <img src="./assets/images/media/media-61.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-caption d-none d-md-block">
                <h3 class="text-fixed-white">Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
        </ng-template>
    </ngb-carousel>
    }`,
carousel5 =`<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">

@if (images7) {
<ngb-carousel class="carousel-inner" [interval]="3000" [showNavigationArrows]="true"
    [showNavigationIndicators]="false">
    @for (image of images7; track images7) {
    <ng-template ngbSlide class="carousel-item">
        <img [src]="image.src" class="d-block w-100" alt="...">
    </ng-template>
    }
</ngb-carousel>
}
</div>`,
carousel6 =` <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
<ngb-carousel class="carousel-inner" [interval]="2800" [showNavigationArrows]="true"
    [showNavigationIndicators]="false">
    <ng-template ngbSlide class="carousel-item">
        <img src="./assets/images/media/media-40.jpg" class="d-block w-100" alt="..." />
    </ng-template>
    <ng-template ngbSlide class="carousel-item">
        <img src="./assets/images/media/media-41.jpg" class="d-block w-100" alt="..." />
    </ng-template>
    <ng-template ngbSlide class="carousel-item">
        <img src="./assets/images/media/media-42.jpg" class="d-block w-100" alt="..." />
    </ng-template>
</ngb-carousel>

</div>`,
carousel7 =`<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false"
data-bs-interval="false">

@if (images8) {
<ngb-carousel class="carousel-inner" [interval]="2800" [showNavigationArrows]="true"
    [showNavigationIndicators]="false">
    @for (image of images8; track images8) {
    <ng-template ngbSlide class="carousel-item">
        <img [src]="image.src" class="d-block w-100" alt="...">
    </ng-template>
    }
</ngb-carousel>
}

</div>`,
carousel8 =`<div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
<ngb-carousel class="carousel-inner" [showNavigationArrows]="true"
    [showNavigationIndicators]="true">
    <ng-template ngbSlide class="carousel-item">
        <img src="./assets/images/media/media-63.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
            <h5 class="text-fixed-white">First slide label</h5>
            <p class="op-7">
                Some representative placeholder content for the first slide.
            </p>
        </div>
    </ng-template>
    <ng-template ngbSlide class="carousel-item">
        <img src="./assets/images/media/media-64.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
            <h5 class="text-fixed-white">Second slide label</h5>
            <p class="op-7">
                Some representative placeholder content for the second slide.
            </p>
        </div>
    </ng-template>
    <ng-template ngbSlide class="carousel-item">
        <img src="./assets/images/media/media-62.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
            <h5 class="text-fixed-white">Third slide label</h5>
            <p class="op-7">
                Some representative placeholder content for the third slide.
            </p>
        </div>
    </ng-template>
</ngb-carousel>
</div>`;