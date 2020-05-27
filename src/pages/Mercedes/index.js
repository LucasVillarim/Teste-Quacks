import React from 'react';

import mercedes from '../../assets/mercedes.svg';

import './style.css';

export default function mercedesPage() {
    return(
        <div className = "container-page">
            <div className = "content">
                <img src = {mercedes} alt = "Mercedes-Benz" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut pharetra ex, nec finibus purus. Maecenas non lorem pellentesque, ultrices ipsum a, maximus lacus. Nulla vestibulum augue dolor, quis molestie urna fringilla non. Morbi a interdum risus. Praesent venenatis aliquam tempus. Fusce sit amet metus dignissim, viverra odio non, tempor nisl. Etiam pulvinar justo in consectetur posuere. Aenean suscipit lorem vel tortor condimentum fringilla. Ut sit amet lectus eleifend, vestibulum ligula et, pulvinar sem. Nullam rutrum neque sodales augue volutpat, sit amet pulvinar libero luctus. Vivamus nec porttitor turpis, eu aliquet orci. Morbi ullamcorper neque vel metus efficitur vehicula. Donec pharetra felis congue interdum mollis.
                    Duis vitae ultrices libero. Duis in sollicitudin enim. Nunc rhoncus id arcu sit amet aliquam. Aliquam iaculis mi elit, id vestibulum massa tempus vitae. Praesent eget commodo neque, vel dapibus sem. Curabitur viverra malesuada libero, at auctor nulla finibus sit amet. Fusce et tristique libero, non malesuada ligula. Vestibulum scelerisque ultricies purus vel dictum. Sed ultrices eros at ante maximus egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque consequat ligula sit amet elit commodo, non elementum lorem finibus. Morbi in eros sed risus luctus cursus. Curabitur non tincidunt diam. Nullam maximus auctor scelerisque.
                    Suspendisse eu lectus sapien. Ut neque quam, faucibus iaculis ante vel, ultricies vehicula mauris. Praesent blandit risus ex, in pretium elit posuere a. Sed leo urna, pulvinar nec odio sed, iaculis ultricies enim. Duis aliquam justo in odio egestas, a commodo elit interdum. Proin a orci consectetur, consectetur quam et, posuere ligula. Aliquam pellentesque semper tortor, eu vulputate risus rhoncus in.
                    Vivamus sem justo, porttitor et magna non, congue tempor neque. Quisque non sapien dictum, interdum orci eu, rutrum lorem. Aliquam lectus ligula, luctus in urna id, facilisis volutpat lectus. Pellentesque efficitur neque id ligula congue, id lacinia mi vulputate. Morbi placerat ornare facilisis. Etiam a convallis purus. Sed eu est ipsum. Aenean sed purus et magna tempus dictum. Integer lacinia aliquet leo, in tristique velit. Donec non ultrices libero. Integer non placerat augue. Morbi vitae auctor leo. Pellentesque suscipit sem varius sem tempor, sed posuere sem aliquam. Suspendisse pretium volutpat lectus, quis lacinia dui scelerisque at. Phasellus faucibus rhoncus metus, et venenatis sapien iaculis non.
                </p>
            </div>
        </div>
    );
}