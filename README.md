# QR API
API that returns custom QR codes.

The api receives the following parameters in the url:

- `text`: It is the text that will be encoded in the QR, it is required and a minimum of one character is expected.

- `width`: Width in pixels of the qr, the minimum is **33**.

- `type`: desired format for the image, **png** or **svg**.

- `color`: qr color, default is **000**.

- `background_color`: qr background color, default is **fff**

###

send the parameters to the /api/v1/generate path

## Examples

**png QR**: [https://qr-api-sand.vercel.app/api/v1/generate?text=hello%20world](https://qr-api-sand.vercel.app/api/v1/generate?text=hello%20world)

###

**svg QR**: [https://qr-api-sand.vercel.app/api/v1/generate?text=hello%20world&type=svg](https://qr-api-sand.vercel.app/api/v1/generate?text=hello%20world&type=svg)

###

**custom QR**: [https://qr-api-sand.vercel.app/api/v1/generate?text=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dl482T0yNkeo&width=400&color=780000&background_color=fdf0d5&type=png](https://qr-api-sand.vercel.app/api/v1/generate?text=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dl482T0yNkeo&width=400&color=780000&background_color=fdf0d5&type=png)
