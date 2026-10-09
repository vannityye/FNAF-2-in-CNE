#pragma header

void main()
{
    vec2 uv = openfl_TextureCoordv;

    float depth = 5.0;

    float dx = abs(uv.x - 0.5);
    float dy = abs(uv.y - 0.5);

    float offset = (dx * 0.2) * dy;

    float dir = uv.y <= 0.5 ? 1.0 : -1.0;

    vec2 coords = vec2(uv.x, uv.y + dx * (offset * depth * dir));

    gl_FragColor = flixel_texture2D(bitmap, coords);
}