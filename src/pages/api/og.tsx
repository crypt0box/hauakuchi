import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // ?title=<title>
    const hasTitle = searchParams.has("title");
    const title = hasTitle ? searchParams.get("title") : "My default title";

    return new ImageResponse(
      (
        <div
          style={{
            position: "relative",
            backgroundImage: `url(${`data:image/svg+xml,${encodeURIComponent(
              '<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_11_34)"><path d="M1200 0H0V630H1200V0Z" fill="#F6AD55"/><g filter="url(#filter0_f_11_34)"><path d="M617.333 988.05C880.221 988.05 1093.33 820.224 1093.33 613.2C1093.33 406.176 880.221 238.35 617.333 238.35C354.446 238.35 141.333 406.176 141.333 613.2C141.333 820.224 354.446 988.05 617.333 988.05Z" fill="#FBD38D"/><path d="M1058.67 518.7C1321.55 518.7 1534.67 350.874 1534.67 143.85C1534.67 -63.174 1321.55 -231 1058.67 -231C795.779 -231 582.667 -63.174 582.667 143.85C582.667 350.874 795.779 518.7 1058.67 518.7Z" fill="#F6AD55"/><path d="M214.667 814.8C477.554 814.8 690.667 646.974 690.667 439.95C690.667 232.926 477.554 65.1 214.667 65.1C-48.2208 65.1 -261.333 232.926 -261.333 439.95C-261.333 646.974 -48.2208 814.8 214.667 814.8Z" fill="#FBD38D"/><path d="M101.333 569.1C364.221 569.1 577.333 401.274 577.333 194.25C577.333 -12.774 364.221 -180.6 101.333 -180.6C-161.554 -180.6 -374.667 -12.774 -374.667 194.25C-374.667 401.274 -161.554 569.1 101.333 569.1Z" fill="#FBD38D"/><path d="M638.667 402.15C901.554 402.15 1114.67 234.324 1114.67 27.3C1114.67 -179.724 901.554 -347.55 638.667 -347.55C375.779 -347.55 162.667 -179.724 162.667 27.3C162.667 234.324 375.779 402.15 638.667 402.15Z" fill="#F6AD55"/><path d="M646.667 638.4C909.554 638.4 1122.67 470.574 1122.67 263.55C1122.67 56.526 909.554 -111.3 646.667 -111.3C383.779 -111.3 170.667 56.526 170.667 263.55C170.667 470.574 383.779 638.4 646.667 638.4Z" fill="#FBD38D"/></g><rect x="40" y="40" width="1120" height="548" rx="10" fill="white"/><rect x="88" y="65" width="1024" height="408.075" rx="10" fill="#E0EDFF"/><rect width="53.0325" height="53.0325" transform="matrix(0.666673 -0.74535 0.666673 0.74535 565 473.472)" fill="#E0EDFF"/></g><path d="M271.473 528.672C272.41 528.711 273.211 529.102 273.875 529.844C274.539 530.547 274.891 531.426 274.93 532.48V537.695H280.555L281.258 532.48C281.414 531.387 281.863 530.488 282.605 529.785C283.387 529.043 284.266 528.672 285.242 528.672C286.219 528.711 287 529.102 287.586 529.844C288.172 530.547 288.426 531.426 288.348 532.48L287.645 537.695H289.402C291.668 537.812 293.582 538.691 295.145 540.332C296.707 541.973 297.82 543.848 298.484 545.957C299.188 548.027 299.539 550.176 299.539 552.402C299.539 554.668 299.207 556.855 298.543 558.965C297.879 561.074 296.746 562.949 295.145 564.59C293.582 566.191 291.59 566.973 289.168 566.934H287.176C286.199 566.934 285.398 566.523 284.773 565.703C283.992 564.961 283.602 564.023 283.602 562.891C283.602 561.68 283.953 560.742 284.656 560.078C285.359 559.375 286.199 559.023 287.176 559.023H289.461C290.047 559.023 290.555 558.594 290.984 557.734C291.414 556.875 291.727 555.996 291.922 555.098C292.156 554.199 292.273 553.262 292.273 552.285C292.273 551.387 292.156 550.449 291.922 549.473C291.727 548.496 291.414 547.617 290.984 546.836C290.555 546.055 290.047 545.645 289.461 545.605H286.59L286.238 548.008C285.887 550.781 285.242 553.398 284.305 555.859C283.328 558.32 281.941 560.41 280.145 562.129C278.348 563.809 276.453 564.727 274.461 564.883H266.609C264.188 564.922 262.176 564.18 260.574 562.656C259.012 561.133 257.898 559.395 257.234 557.441C256.57 555.488 256.238 553.457 256.238 551.348C256.238 549.316 256.57 547.324 257.234 545.371C257.938 543.418 259.07 541.68 260.633 540.156C262.195 538.633 264.109 537.812 266.375 537.695H267.781V532.48C267.82 531.387 268.191 530.488 268.895 529.785C269.637 529.043 270.496 528.672 271.473 528.672ZM266.316 545.605C265.73 545.645 265.223 546.016 264.793 546.719C264.363 547.422 264.031 548.164 263.797 548.945C263.602 549.727 263.504 550.508 263.504 551.289C263.504 552.109 263.602 552.91 263.797 553.691C264.031 554.473 264.363 555.215 264.793 555.918C265.223 556.621 265.73 556.973 266.316 556.973H267.781V545.605H266.316ZM276.688 555.332C277.43 554.277 277.977 553.086 278.328 551.758C278.719 550.391 279.012 548.906 279.207 547.305L279.441 545.605H274.93V556.738C275.633 556.465 276.219 555.996 276.688 555.332ZM324.734 543.555H308.328C307.469 543.555 306.707 543.281 306.043 542.734C305.418 542.148 305.105 541.406 305.105 540.508C305.301 538.555 306.375 537.48 308.328 537.285H325.496H326.375C327.977 537.324 329.383 537.832 330.594 538.809C331.844 539.746 332.84 540.898 333.582 542.266C334.324 543.633 334.871 545.078 335.223 546.602C335.574 548.086 335.75 549.59 335.75 551.113C335.75 553.184 335.438 555.215 334.812 557.207C334.188 559.16 333.172 560.918 331.766 562.48C330.359 564.004 328.562 564.824 326.375 564.941H324.266H313.25C312.352 564.941 311.59 564.648 310.965 564.062C310.34 563.477 310.008 562.754 309.969 561.895C310.164 559.941 311.258 558.867 313.25 558.672H324.734C325.945 558.594 326.941 558.145 327.723 557.324C328.543 556.504 329.109 555.547 329.422 554.453C329.773 553.359 329.949 552.246 329.949 551.113C329.949 549.98 329.773 548.887 329.422 547.832C329.109 546.738 328.543 545.781 327.723 544.961C326.941 544.102 325.945 543.633 324.734 543.555ZM342.84 536.113C342.84 535.137 343.211 534.297 343.953 533.594C344.734 532.891 345.672 532.539 346.766 532.539H351.336L351.512 531.602C351.707 530.625 352.215 529.844 353.035 529.258C353.895 528.672 354.852 528.438 355.906 528.555C356.961 528.75 357.82 529.258 358.484 530.078C359.07 530.82 359.344 531.641 359.305 532.539H379.93C381.023 532.539 381.961 532.871 382.742 533.535C383.484 534.277 383.855 535.137 383.855 536.113C383.855 537.09 383.465 537.93 382.684 538.633C381.941 539.336 381.023 539.688 379.93 539.688H358.133L357.43 543.848H369.383C369.617 543.848 369.852 543.867 370.086 543.906H370.438C373.172 543.984 375.418 544.629 377.176 545.84C378.934 547.012 380.203 548.359 380.984 549.883C381.766 551.367 382.156 552.891 382.156 554.453C382.156 556.016 381.766 557.559 380.984 559.082C380.242 560.566 378.973 561.914 377.176 563.125C375.418 564.297 373.172 564.883 370.438 564.883H352.273C351.18 564.883 350.262 564.492 349.52 563.711C348.738 562.93 348.348 561.973 348.348 560.84C348.348 559.746 348.719 558.809 349.461 558.027C350.242 557.246 351.18 556.855 352.273 556.855H371.551C372.137 556.855 372.605 556.719 372.957 556.445C373.348 556.172 373.621 555.859 373.777 555.508C373.973 555.117 374.07 554.727 374.07 554.336C374.07 554.023 373.973 553.691 373.777 553.34C373.621 552.949 373.348 552.617 372.957 552.344C372.605 552.07 372.137 551.914 371.551 551.875H352.859C351.219 551.875 350.066 551.348 349.402 550.293C348.777 549.238 348.621 547.949 348.934 546.426L350.105 539.688H346.766C345.672 539.688 344.754 539.336 344.012 538.633C343.23 537.93 342.84 537.09 342.84 536.113ZM388.543 541.855C388.543 540.957 388.836 540.215 389.422 539.629C390.047 539.004 390.789 538.691 391.648 538.691H395.164C395.242 537.91 395.555 537.266 396.102 536.758C396.727 536.172 397.488 535.879 398.387 535.879C399.207 535.918 399.93 536.211 400.555 536.758C401.062 537.305 401.375 537.949 401.492 538.691H406.004C406.121 537.91 406.453 537.266 407 536.758C407.625 536.172 408.367 535.879 409.227 535.879C410.086 535.918 410.809 536.211 411.395 536.758C411.941 537.305 412.254 537.949 412.332 538.691H413.445C415.555 538.809 417.312 539.414 418.719 540.508C420.125 541.602 421.141 542.852 421.766 544.258C422.391 545.664 422.703 547.09 422.703 548.535C422.703 550.059 422.391 551.523 421.766 552.93C421.18 554.336 420.164 555.586 418.719 556.68C417.312 557.773 415.516 558.32 413.328 558.32H408.934C408.035 558.32 407.293 558.008 406.707 557.383C406.082 556.758 405.77 556.016 405.77 555.156C405.77 554.297 406.062 553.555 406.648 552.93C407.273 552.305 408.035 551.992 408.934 551.992H413.621C414.207 551.992 414.695 551.797 415.086 551.406C415.477 551.016 415.77 550.566 415.965 550.059C416.16 549.551 416.258 549.023 416.258 548.477C416.258 548.008 416.16 547.52 415.965 547.012C415.77 546.465 415.477 545.996 415.086 545.605C414.695 545.215 414.207 545 413.621 544.961H412.332C412.098 546.758 411.062 547.734 409.227 547.891C408.367 547.891 407.625 547.598 407 547.012C406.375 546.465 406.043 545.781 406.004 544.961H401.492V562.48C401.297 564.355 400.262 565.371 398.387 565.527C397.488 565.527 396.727 565.234 396.102 564.648C395.477 564.062 395.164 563.34 395.164 562.48V544.961H391.648C390.789 544.961 390.066 544.648 389.48 544.023C388.855 543.438 388.543 542.715 388.543 541.855ZM462.371 528.672C463.426 528.711 464.324 529.082 465.066 529.785C465.809 530.449 466.199 531.25 466.238 532.188V532.949H468.289C469.383 532.949 470.32 533.301 471.102 534.004C471.844 534.746 472.215 535.625 472.215 536.641C472.215 537.656 471.824 538.535 471.043 539.277C470.301 539.98 469.383 540.332 468.289 540.332H466.238V544.609H468.406C469.5 544.609 470.418 544.98 471.16 545.723C471.941 546.426 472.332 547.285 472.332 548.301C472.332 549.355 471.941 550.215 471.16 550.879C470.418 551.582 469.5 551.934 468.406 551.934H466.18C466.062 554.238 465.691 556.348 465.066 558.262C464.285 560.488 463.191 562.246 461.785 563.535C460.418 564.824 458.367 565.547 455.633 565.703H453.055C450.477 565.586 448.348 564.961 446.668 563.828C444.871 562.656 443.582 561.309 442.801 559.785C442.059 558.223 441.688 556.66 441.688 555.098C441.688 553.574 442.078 552.051 442.859 550.527C443.641 548.965 444.91 547.598 446.668 546.426C448.426 545.254 450.789 544.648 453.758 544.609H458.328V540.332H446.023C444.93 540.332 444.012 539.98 443.27 539.277C442.488 538.535 442.098 537.656 442.098 536.641C442.098 535.625 442.469 534.766 443.211 534.062C443.992 533.32 444.93 532.949 446.023 532.949H458.328V532.188C458.367 531.25 458.777 530.43 459.559 529.727C460.34 529.023 461.277 528.672 462.371 528.672ZM433.895 529.375C434.988 529.375 435.926 529.746 436.707 530.488C437.488 531.191 437.898 532.09 437.938 533.184V553.691C437.938 555.371 438.445 557.344 439.461 559.609C439.891 560.586 439.871 561.562 439.402 562.539C438.973 563.516 438.27 564.238 437.293 564.707C435.027 565.449 433.328 564.805 432.195 562.773C430.789 559.531 430.066 556.426 430.027 553.457V533.184C430.066 532.129 430.457 531.25 431.199 530.547C431.941 529.805 432.84 529.414 433.895 529.375ZM456.746 557.148C457.332 556.406 457.762 555.43 458.035 554.219C458.152 553.555 458.25 552.793 458.328 551.934H453.055C452.312 551.895 451.688 552.07 451.18 552.461C450.711 552.812 450.359 553.223 450.125 553.691C449.891 554.121 449.773 554.59 449.773 555.098C449.773 555.41 449.891 555.859 450.125 556.445C450.359 556.992 450.711 557.441 451.18 557.793C451.688 558.145 452.312 558.34 453.055 558.379H453.641C455.125 558.301 456.16 557.891 456.746 557.148ZM479.305 536.113C479.305 535.02 479.676 534.102 480.418 533.359C481.199 532.578 482.137 532.188 483.23 532.188H487.566C487.684 531.211 488.094 530.391 488.797 529.727C489.578 529.023 490.516 528.672 491.609 528.672C492.664 528.711 493.562 529.082 494.305 529.785C494.969 530.449 495.359 531.25 495.477 532.188H501.16C501.277 531.211 501.688 530.391 502.391 529.727C503.172 529.023 504.109 528.672 505.203 528.672C506.258 528.711 507.156 529.082 507.898 529.785C508.562 530.449 508.953 531.25 509.07 532.188H510.418C513.074 532.305 515.281 533.066 517.039 534.473C518.797 535.84 520.066 537.402 520.848 539.16C521.629 540.918 522.02 542.695 522.02 544.492C522.02 546.367 521.629 548.184 520.848 549.941C520.105 551.699 518.836 553.281 517.039 554.688C515.281 556.055 513.035 556.719 510.301 556.68H504.793C503.699 556.68 502.781 556.289 502.039 555.508C501.258 554.766 500.867 553.848 500.867 552.754C500.867 551.66 501.238 550.742 501.98 550C502.762 549.219 503.699 548.828 504.793 548.828H510.652C511.395 548.828 512 548.594 512.469 548.125C512.977 547.617 513.348 547.051 513.582 546.426C513.816 545.762 513.934 545.098 513.934 544.434C513.934 543.809 513.816 543.184 513.582 542.559C513.348 541.895 512.977 541.328 512.469 540.859C512 540.352 511.395 540.078 510.652 540.039H509.07C508.758 542.266 507.469 543.477 505.203 543.672C504.109 543.672 503.172 543.301 502.391 542.559C501.609 541.895 501.199 541.055 501.16 540.039H495.477V561.895C495.242 564.238 493.953 565.508 491.609 565.703C490.516 565.703 489.559 565.352 488.738 564.648C487.957 563.906 487.566 562.988 487.566 561.895V540.039H483.23C482.137 540.039 481.219 539.648 480.477 538.867C479.695 538.125 479.305 537.207 479.305 536.113ZM533.445 554.688C530.711 553.047 529.324 550.664 529.285 547.539C529.324 544.453 530.711 542.109 533.445 540.508C536.219 538.906 540.027 537.285 544.871 535.645L562.977 529.961C563.367 529.805 563.816 529.707 564.324 529.668C565.379 529.59 566.277 529.902 567.02 530.605C567.762 531.309 568.133 532.227 568.133 533.359C568.133 534.609 567.859 535.527 567.312 536.113C566.805 536.699 566.16 537.188 565.379 537.578L548.914 542.383C547.156 542.93 545.496 543.457 543.934 543.965C542.371 544.473 540.926 545.078 539.598 545.781C538.23 546.289 537.469 546.875 537.312 547.539C537.469 548.242 538.211 548.906 539.539 549.531C540.906 550.117 542.371 550.664 543.934 551.172C545.496 551.68 547.156 552.207 548.914 552.754L565.379 557.676C566.16 558.066 566.805 558.555 567.312 559.141C567.859 559.727 568.133 560.605 568.133 561.777C568.133 562.91 567.762 563.828 567.02 564.531C566.277 565.234 565.379 565.547 564.324 565.469C563.816 565.43 563.367 565.332 562.977 565.176L544.871 559.492C540.105 557.852 536.297 556.25 533.445 554.688ZM575.164 536.113C575.164 535.137 575.535 534.297 576.277 533.594C577.059 532.891 577.996 532.539 579.09 532.539H583.66L583.836 531.602C584.031 530.625 584.539 529.844 585.359 529.258C586.219 528.672 587.176 528.438 588.23 528.555C589.285 528.75 590.145 529.258 590.809 530.078C591.395 530.82 591.668 531.641 591.629 532.539H612.254C613.348 532.539 614.285 532.871 615.066 533.535C615.809 534.277 616.18 535.137 616.18 536.113C616.18 537.09 615.789 537.93 615.008 538.633C614.266 539.336 613.348 539.688 612.254 539.688H590.457L589.754 543.848H601.707C601.941 543.848 602.176 543.867 602.41 543.906H602.762C605.496 543.984 607.742 544.629 609.5 545.84C611.258 547.012 612.527 548.359 613.309 549.883C614.09 551.367 614.48 552.891 614.48 554.453C614.48 556.016 614.09 557.559 613.309 559.082C612.566 560.566 611.297 561.914 609.5 563.125C607.742 564.297 605.496 564.883 602.762 564.883H584.598C583.504 564.883 582.586 564.492 581.844 563.711C581.062 562.93 580.672 561.973 580.672 560.84C580.672 559.746 581.043 558.809 581.785 558.027C582.566 557.246 583.504 556.855 584.598 556.855H603.875C604.461 556.855 604.93 556.719 605.281 556.445C605.672 556.172 605.945 555.859 606.102 555.508C606.297 555.117 606.395 554.727 606.395 554.336C606.395 554.023 606.297 553.691 606.102 553.34C605.945 552.949 605.672 552.617 605.281 552.344C604.93 552.07 604.461 551.914 603.875 551.875H585.184C583.543 551.875 582.391 551.348 581.727 550.293C581.102 549.238 580.945 547.949 581.258 546.426L582.43 539.688H579.09C577.996 539.688 577.078 539.336 576.336 538.633C575.555 537.93 575.164 537.09 575.164 536.113ZM641.316 523.75C641.316 522.578 641.727 521.582 642.547 520.762C643.367 519.941 644.363 519.531 645.535 519.531C646.707 519.531 647.703 519.941 648.523 520.762C649.344 521.582 649.754 522.578 649.754 523.75C649.754 524.922 649.344 525.918 648.523 526.738C647.703 527.559 646.707 527.969 645.535 527.969C644.363 527.969 643.367 527.559 642.547 526.738C641.727 525.918 641.316 524.922 641.316 523.75ZM651.395 523.75C651.395 522.578 651.805 521.582 652.625 520.762C653.445 519.941 654.441 519.531 655.613 519.531C656.785 519.531 657.781 519.941 658.602 520.762C659.422 521.582 659.832 522.578 659.832 523.75C659.832 524.922 659.422 525.918 658.602 526.738C657.781 527.559 656.785 527.969 655.613 527.969C654.441 527.969 653.445 527.559 652.625 526.738C651.805 525.918 651.395 524.922 651.395 523.75ZM621.277 534.238C621.277 533.145 621.648 532.227 622.391 531.484C623.172 530.703 624.109 530.312 625.203 530.312H647.879H651.57H655.906C658.367 530.547 659.715 531.895 659.949 534.355C659.949 535.449 659.539 536.367 658.719 537.109C657.938 537.812 657 538.164 655.906 538.164H651.57H646.004C644.52 538.242 643.23 538.809 642.137 539.863C641.004 540.918 640.145 542.129 639.559 543.496C638.973 544.824 638.602 546.191 638.445 547.598C638.289 549.004 638.367 550.391 638.68 551.758C639.031 553.125 639.832 554.336 641.082 555.391C642.371 556.406 643.758 556.953 645.242 557.031H652.391C654.852 557.266 656.199 558.613 656.434 561.074C656.395 562.168 655.984 563.086 655.203 563.828C654.422 564.531 653.484 564.883 652.391 564.883H645.652C641.316 564.727 638.074 563.691 635.926 561.777C633.777 559.824 632.273 557.617 631.414 555.156C630.555 552.695 630.262 550.176 630.535 547.598C630.887 543.77 632.078 540.82 634.109 538.75C634.305 538.555 634.52 538.359 634.754 538.164H625.203C624.109 538.164 623.191 537.773 622.449 536.992C621.668 536.25 621.277 535.332 621.277 534.238ZM685.73 566.23C683.699 566.23 681.688 565.996 679.695 565.527C677.742 565.059 675.867 564.375 674.07 563.477C672.273 562.539 670.672 561.309 669.266 559.785C667.898 558.262 667.156 556.445 667.039 554.336V551.875V533.184C667.273 530.84 668.562 529.57 670.906 529.375C672 529.375 672.938 529.746 673.719 530.488C674.539 531.191 674.949 532.09 674.949 533.184V552.52C675.027 553.73 675.477 554.746 676.297 555.566C677.156 556.348 678.094 556.973 679.109 557.441C680.164 557.91 681.238 558.262 682.332 558.496C683.465 558.73 684.598 558.848 685.73 558.848C686.863 558.848 687.977 558.73 689.07 558.496C690.203 558.262 691.277 557.91 692.293 557.441C693.348 556.973 694.285 556.348 695.105 555.566C695.965 554.746 696.434 553.73 696.512 552.52V550.996C696.707 548.652 697.977 547.383 700.32 547.188C701.414 547.188 702.352 547.559 703.133 548.301C703.953 549.004 704.363 549.902 704.363 550.996V551.875V554.336C704.246 556.445 703.504 558.262 702.137 559.785C700.77 561.309 699.188 562.539 697.391 563.477C695.594 564.375 693.699 565.059 691.707 565.527C689.754 565.996 687.762 566.23 685.73 566.23ZM710.75 541.855C710.75 540.957 711.043 540.215 711.629 539.629C712.254 539.004 712.996 538.691 713.855 538.691H717.371C717.449 537.91 717.762 537.266 718.309 536.758C718.934 536.172 719.695 535.879 720.594 535.879C721.414 535.918 722.137 536.211 722.762 536.758C723.27 537.305 723.582 537.949 723.699 538.691H728.211C728.328 537.91 728.66 537.266 729.207 536.758C729.832 536.172 730.574 535.879 731.434 535.879C732.293 535.918 733.016 536.211 733.602 536.758C734.148 537.305 734.461 537.949 734.539 538.691H735.652C737.762 538.809 739.52 539.414 740.926 540.508C742.332 541.602 743.348 542.852 743.973 544.258C744.598 545.664 744.91 547.09 744.91 548.535C744.91 550.059 744.598 551.523 743.973 552.93C743.387 554.336 742.371 555.586 740.926 556.68C739.52 557.773 737.723 558.32 735.535 558.32H731.141C730.242 558.32 729.5 558.008 728.914 557.383C728.289 556.758 727.977 556.016 727.977 555.156C727.977 554.297 728.27 553.555 728.855 552.93C729.48 552.305 730.242 551.992 731.141 551.992H735.828C736.414 551.992 736.902 551.797 737.293 551.406C737.684 551.016 737.977 550.566 738.172 550.059C738.367 549.551 738.465 549.023 738.465 548.477C738.465 548.008 738.367 547.52 738.172 547.012C737.977 546.465 737.684 545.996 737.293 545.605C736.902 545.215 736.414 545 735.828 544.961H734.539C734.305 546.758 733.27 547.734 731.434 547.891C730.574 547.891 729.832 547.598 729.207 547.012C728.582 546.465 728.25 545.781 728.211 544.961H723.699V562.48C723.504 564.355 722.469 565.371 720.594 565.527C719.695 565.527 718.934 565.234 718.309 564.648C717.684 564.062 717.371 563.34 717.371 562.48V544.961H713.855C712.996 544.961 712.273 544.648 711.688 544.023C711.062 543.438 710.75 542.715 710.75 541.855ZM784.578 529.375C785.633 529.414 786.531 529.805 787.273 530.547C788.016 531.25 788.406 532.129 788.445 533.184V548.008C788.406 550.781 788.016 553.398 787.273 555.859C786.492 558.32 785.203 560.41 783.406 562.129C781.648 563.809 779.402 564.727 776.668 564.883H770.105C769.051 564.844 768.152 564.473 767.41 563.77C766.707 563.027 766.336 562.129 766.297 561.074C766.297 559.98 766.648 559.043 767.352 558.262C768.094 557.48 769.012 557.07 770.105 557.031H774.676C776.16 556.953 777.391 556.387 778.367 555.332C779.344 554.277 779.949 553.086 780.184 551.758C780.457 550.391 780.574 548.906 780.535 547.305V533.184C780.574 532.09 780.984 531.191 781.766 530.488C782.547 529.746 783.484 529.375 784.578 529.375ZM764.363 552.402L762.547 552.285C759.695 552.012 757.469 551.309 755.867 550.176C754.266 549.004 753.387 547.031 753.23 544.258V533.477C753.27 532.422 753.641 531.543 754.344 530.84C755.047 530.098 755.906 529.707 756.922 529.668C757.977 529.668 758.875 530.039 759.617 530.781C760.398 531.484 760.809 532.383 760.848 533.477V542.031C760.848 542.93 760.984 543.594 761.258 544.023C761.531 544.414 762.176 544.668 763.191 544.785C764.129 544.824 764.93 544.922 765.594 545.078C766.258 545.195 766.844 545.742 767.352 546.719C767.82 547.656 767.898 548.652 767.586 549.707C767.273 550.723 766.648 551.465 765.711 551.934C765.242 552.168 764.793 552.324 764.363 552.402ZM809.832 528.262C810.887 528.496 811.707 529.043 812.293 529.902C812.918 530.723 813.152 531.641 812.996 532.656L812.938 532.891H821.082C822.176 532.891 823.113 533.242 823.895 533.945C824.637 534.727 825.008 535.625 825.008 536.641C825.008 537.656 824.637 538.535 823.895 539.277H835.379C836.473 539.277 837.41 539.629 838.191 540.332C838.934 541.113 839.305 542.012 839.305 543.027C839.305 544.082 838.914 544.98 838.133 545.723C837.391 546.426 836.473 546.777 835.379 546.777H822.605C821.512 546.777 820.594 546.426 819.852 545.723C819.07 544.98 818.68 544.082 818.68 543.027C818.68 542.051 819.031 541.191 819.734 540.449H811.648L807.84 562.363C807.215 564.629 805.73 565.664 803.387 565.469C802.293 565.273 801.414 564.746 800.75 563.887C800.086 563.027 799.852 562.07 800.047 561.016L803.621 540.449H800.574C799.48 540.449 798.562 540.078 797.82 539.336C797.039 538.555 796.648 537.656 796.648 536.641C796.648 535.625 797.02 534.746 797.762 534.004C798.543 533.262 799.48 532.891 800.574 532.891H804.91L805.203 531.309C805.438 530.254 806.004 529.434 806.902 528.848C807.801 528.262 808.777 528.066 809.832 528.262ZM812.586 556.621C812.43 556.191 812.352 555.723 812.352 555.215C812.352 554.16 812.723 553.262 813.465 552.52C814.246 551.738 815.164 551.348 816.219 551.348C817.312 551.348 818.074 551.621 818.504 552.168C818.934 552.676 819.383 553.32 819.852 554.102C820.438 554.961 821.277 555.684 822.371 556.27C823.465 556.855 824.754 557.188 826.238 557.266H835.965C837.059 557.305 837.957 557.715 838.66 558.496C839.402 559.238 839.773 560.137 839.773 561.191C839.734 562.207 839.344 563.066 838.602 563.77C837.898 564.473 837.02 564.844 835.965 564.883H824.246C821.473 564.727 819.148 563.867 817.273 562.305C815.398 560.742 814.148 559.375 813.523 558.203L812.586 556.621ZM850.555 529.375C851.648 529.375 852.586 529.746 853.367 530.488C854.148 531.191 854.559 532.09 854.598 533.184V547.305C854.559 548.906 854.656 550.391 854.891 551.758C855.164 553.086 855.789 554.277 856.766 555.332C857.742 556.387 858.973 556.953 860.457 557.031H862.215C863.309 557.07 864.207 557.48 864.91 558.262C865.652 559.043 866.023 559.98 866.023 561.074C865.984 562.129 865.594 563.027 864.852 563.77C864.148 564.473 863.27 564.844 862.215 564.883H858.465C855.73 564.727 853.465 563.809 851.668 562.129C849.91 560.41 848.641 558.32 847.859 555.859C847.117 553.398 846.727 550.781 846.688 548.008V533.184C846.727 532.129 847.117 531.25 847.859 530.547C848.602 529.805 849.5 529.414 850.555 529.375ZM883.25 562.305C882.156 562.305 881.219 561.953 880.438 561.25C879.656 560.508 879.246 559.59 879.207 558.496V547.422C879.246 545.82 879.129 544.355 878.855 543.027C878.621 541.66 878.016 540.449 877.039 539.395C876.062 538.34 874.832 537.773 873.348 537.695H871.59C870.496 537.656 869.578 537.246 868.836 536.465C868.133 535.684 867.781 534.746 867.781 533.652C867.82 532.598 868.191 531.719 868.895 531.016C869.637 530.273 870.535 529.883 871.59 529.844H875.34C878.074 530 880.32 530.938 882.078 532.656C883.875 534.336 885.164 536.406 885.945 538.867C886.688 541.328 887.078 543.945 887.117 546.719V558.496C887.078 559.551 886.688 560.449 885.945 561.191C885.203 561.895 884.305 562.266 883.25 562.305Z" fill="black"/><g clip-path="url(#clip1_11_34)"><path d="M934 574C949.464 574 962 561.464 962 546C962 530.536 949.464 518 934 518C918.536 518 906 530.536 906 546C906 561.464 918.536 574 934 574Z" fill="#FFCC4D"/><path d="M948.521 554.756C948.387 554.636 948.215 554.565 948.035 554.557C947.855 554.549 947.678 554.603 947.533 554.711C947.473 554.756 941.432 559.222 934 559.222C926.586 559.222 920.526 554.756 920.467 554.711C920.322 554.603 920.145 554.548 919.965 554.556C919.785 554.564 919.613 554.635 919.479 554.755C919.345 554.876 919.257 555.04 919.23 555.218C919.204 555.396 919.24 555.578 919.333 555.733C919.533 556.068 924.337 563.889 934 563.889C943.663 563.889 948.468 556.068 948.667 555.733C948.76 555.579 948.796 555.397 948.77 555.218C948.743 555.04 948.655 554.877 948.521 554.756Z" fill="#664500"/><path d="M934 559.364C933.77 559.364 933.547 559.347 933.319 559.339V566.364H934.68V559.337C934.454 559.345 934.23 559.364 934 559.364Z" fill="#65471B"/><path d="M940.222 558.444C940.247 558.438 937.967 559.032 936.417 559.2C935.848 559.266 935.271 559.319 934.68 559.339V566.365H937.111C938.822 566.365 940.222 564.965 940.222 563.254V558.444ZM927.778 558.444C927.753 558.438 930.033 559.032 931.583 559.2C932.152 559.266 932.729 559.319 933.32 559.339V566.365H930.889C929.178 566.365 927.778 564.965 927.778 563.254V558.444Z" fill="white"/><path d="M948.521 554.756C948.387 554.636 948.215 554.565 948.035 554.557C947.855 554.549 947.678 554.603 947.533 554.711C947.487 554.745 944.019 557.306 939.116 558.553C938.427 558.729 936.217 559.222 934.005 559.224C931.79 559.224 929.573 558.729 928.884 558.553C923.981 557.306 920.513 554.745 920.467 554.711C920.322 554.605 920.145 554.552 919.966 554.561C919.787 554.57 919.616 554.64 919.483 554.76C919.35 554.88 919.262 555.043 919.235 555.22C919.207 555.397 919.242 555.578 919.333 555.733C919.484 555.985 922.265 560.504 927.778 562.704V559.858C927.753 559.852 930.033 560.446 931.583 560.614C932.152 560.68 932.729 560.733 933.32 560.753C933.547 560.761 933.77 560.778 934 560.778C934.23 560.778 934.453 560.761 934.681 560.753C935.272 560.733 935.85 560.681 936.419 560.614C937.968 560.446 940.249 559.852 940.224 559.858V562.704C945.737 560.504 948.518 555.985 948.669 555.733C948.761 555.578 948.797 555.396 948.77 555.218C948.743 555.04 948.655 554.877 948.521 554.756ZM947.415 539.815C947.415 542.481 945.956 544.644 944.155 544.644C942.355 544.644 940.894 542.481 940.894 539.815C940.894 537.149 942.353 534.987 944.155 534.987C945.956 534.987 947.415 537.149 947.415 539.815ZM920.711 539.815C920.711 542.481 922.17 544.644 923.971 544.644C925.771 544.644 927.232 542.481 927.232 539.815C927.232 537.149 925.773 534.987 923.971 534.987C922.17 534.987 920.711 537.149 920.711 539.815Z" fill="#65471B"/><path d="M960.146 532.975C959.88 532.717 958.175 533.402 956.45 532.523C952.891 530.709 943.896 528.959 938.041 533.108C937.414 533.551 934.795 533.626 934.062 533.594C933.33 533.627 930.71 533.552 930.083 533.108C924.23 528.959 915.235 530.709 911.676 532.523C909.951 533.402 908.246 532.717 907.98 532.975C907.596 533.347 907.596 534.836 907.982 535.209C908.364 535.581 910.279 536.01 910.66 537.126C911.045 538.242 911.048 544.838 914.103 547.118C916.964 549.253 923.637 549.895 927.866 547.489C931.556 545.39 931.427 540.972 932.104 538.34C932.345 537.402 933.025 536.93 934.064 536.93C935.103 536.93 935.783 537.402 936.024 538.34C936.7 540.971 936.57 545.39 940.261 547.489C944.491 549.894 951.164 549.251 954.023 547.118C957.08 544.84 957.083 538.242 957.466 537.126C957.847 536.01 959.762 535.579 960.144 535.209C960.53 534.836 960.532 533.347 960.146 532.975ZM928.733 538.653C928.613 540.372 928.307 543.673 926.249 544.844C924.987 545.563 923.343 546 921.622 546H921.621C919.715 546 917.074 545.46 916.041 544.69C914.75 543.727 914.258 539.764 914.073 538.281C913.955 537.337 913.638 535.03 914.677 534.676C916.326 534.114 918.626 533.675 920.98 533.675C922.058 533.675 925.679 533.742 927.443 534.828C929.007 535.788 928.8 537.707 928.733 538.653ZM954.054 538.26C953.869 539.744 953.378 543.727 952.086 544.69C951.054 545.46 948.412 546 946.507 546H946.505C944.783 546 943.14 545.563 941.877 544.844C939.819 543.674 939.513 540.394 939.393 538.675C939.328 537.729 939.119 535.796 940.683 534.836C942.448 533.75 946.068 533.675 947.146 533.675C949.5 533.675 951.799 534.106 953.449 534.668C954.488 535.022 954.172 537.315 954.054 538.26Z" fill="#292F33"/></g><defs><filter id="filter0_f_11_34" x="-696.667" y="-669.55" width="2553.33" height="1979.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="161" result="effect1_foregroundBlur_11_34"/></filter><clipPath id="clip0_11_34"><rect width="1200" height="630" fill="white"/></clipPath><clipPath id="clip1_11_34"><rect width="56" height="56" fill="white" transform="translate(906 518)"/></clipPath></defs></svg>'
            )}`})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "100% 100%",
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: 1024,
              height: 385,
              marginTop: 78,
              padding: 24,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 18,
            }}
          >
            {decodeURIComponent(title || "")}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}