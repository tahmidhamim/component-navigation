import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I Accept</Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Here is an important agreement for you to accept</p>
        </Modal>
    );

    return (
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis massa eu dolor tincidunt rhoncus. Morbi et venenatis odio. Suspendisse potenti. Duis mattis tellus ut suscipit ullamcorper. Sed id maximus tellus, vitae vehicula turpis. Pellentesque venenatis, magna non sodales gravida, turpis lectus tincidunt erat, ut convallis metus nunc et diam. Donec malesuada pharetra felis, nec imperdiet erat malesuada nec. Aenean quis purus nibh. Cras ullamcorper varius turpis ac sollicitudin. Morbi semper eros sit amet tortor aliquet pulvinar. Donec odio tortor, venenatis sed felis id, ultrices convallis lorem. Nulla iaculis elit at consectetur mattis. Proin eget sem ut metus tincidunt fringilla. Nunc sollicitudin diam quis placerat tincidunt. Phasellus eu lacinia magna. Aliquam eu lorem vel erat luctus vehicula eget sit amet tortor. Nulla eleifend lectus sit amet elit dapibus, eget varius eros venenatis. Aenean semper dui at gravida feugiat. Nulla in nisl vitae metus volutpat gravida. Etiam luctus est id tellus vulputate, at sagittis urna tristique. Suspendisse sit amet laoreet metus, id ullamcorper odio. Ut neque magna, lacinia eget nisi vel, laoreet pharetra ipsum. In dictum convallis enim vitae aliquet. Cras non turpis efficitur, fermentum erat ac, lobortis nunc. In a ex sed nisi mattis porttitor. Suspendisse justo ligula, sagittis vitae dignissim non, feugiat in diam. Curabitur congue eros sed sem viverra, eu rutrum tortor ultrices. Integer eu dictum nibh. Fusce orci dolor, placerat a rutrum eu, mollis et metus. Sed vestibulum venenatis leo, non laoreet dui dapibus eu. Vestibulum vitae diam odio. Nullam bibendum magna justo, ut tempor est iaculis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum risus libero, sit amet eleifend justo sagittis nec. In nec odio at diam fermentum faucibus. Etiam id sagittis felis. In tempus id lectus nec efficitur. Sed id laoreet dui. Duis vel sollicitudin massa, ac ultrices velit. Nam mattis mollis euismod. In pretium ipsum a lacus hendrerit luctus. Curabitur placerat tellus purus, non mollis arcu varius sed. Maecenas egestas tortor vitae semper pharetra. Sed eget quam nulla. Etiam vitae augue enim. Quisque a varius libero, in molestie augue. Donec scelerisque blandit justo, quis porta sapien tempus sed. Praesent porttitor pulvinar interdum. Maecenas tincidunt ac ex nec facilisis. Vivamus vehicula libero vitae nulla faucibus eleifend. Proin id mi vel felis ultricies pellentesque. Ut lacinia, mi eget egestas vulputate, tortor eros semper odio, quis ultricies quam ligula sit amet urna. Vestibulum sit amet dictum diam. 
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis massa eu dolor tincidunt rhoncus. Morbi et venenatis odio. Suspendisse potenti. Duis mattis tellus ut suscipit ullamcorper. Sed id maximus tellus, vitae vehicula turpis. Pellentesque venenatis, magna non sodales gravida, turpis lectus tincidunt erat, ut convallis metus nunc et diam. Donec malesuada pharetra felis, nec imperdiet erat malesuada nec. Aenean quis purus nibh. Cras ullamcorper varius turpis ac sollicitudin. Morbi semper eros sit amet tortor aliquet pulvinar. Donec odio tortor, venenatis sed felis id, ultrices convallis lorem. Nulla iaculis elit at consectetur mattis. Proin eget sem ut metus tincidunt fringilla. Nunc sollicitudin diam quis placerat tincidunt. Phasellus eu lacinia magna. Aliquam eu lorem vel erat luctus vehicula eget sit amet tortor. Nulla eleifend lectus sit amet elit dapibus, eget varius eros venenatis. Aenean semper dui at gravida feugiat. Nulla in nisl vitae metus volutpat gravida. Etiam luctus est id tellus vulputate, at sagittis urna tristique. Suspendisse sit amet laoreet metus, id ullamcorper odio. Ut neque magna, lacinia eget nisi vel, laoreet pharetra ipsum. In dictum convallis enim vitae aliquet. Cras non turpis efficitur, fermentum erat ac, lobortis nunc. In a ex sed nisi mattis porttitor. Suspendisse justo ligula, sagittis vitae dignissim non, feugiat in diam. Curabitur congue eros sed sem viverra, eu rutrum tortor ultrices. Integer eu dictum nibh. Fusce orci dolor, placerat a rutrum eu, mollis et metus. Sed vestibulum venenatis leo, non laoreet dui dapibus eu. Vestibulum vitae diam odio. Nullam bibendum magna justo, ut tempor est iaculis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum risus libero, sit amet eleifend justo sagittis nec. In nec odio at diam fermentum faucibus. Etiam id sagittis felis. In tempus id lectus nec efficitur. Sed id laoreet dui. Duis vel sollicitudin massa, ac ultrices velit. Nam mattis mollis euismod. In pretium ipsum a lacus hendrerit luctus. Curabitur placerat tellus purus, non mollis arcu varius sed. Maecenas egestas tortor vitae semper pharetra. Sed eget quam nulla. Etiam vitae augue enim. Quisque a varius libero, in molestie augue. Donec scelerisque blandit justo, quis porta sapien tempus sed. Praesent porttitor pulvinar interdum. Maecenas tincidunt ac ex nec facilisis. Vivamus vehicula libero vitae nulla faucibus eleifend. Proin id mi vel felis ultricies pellentesque. Ut lacinia, mi eget egestas vulputate, tortor eros semper odio, quis ultricies quam ligula sit amet urna. Vestibulum sit amet dictum diam. 
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis massa eu dolor tincidunt rhoncus. Morbi et venenatis odio. Suspendisse potenti. Duis mattis tellus ut suscipit ullamcorper. Sed id maximus tellus, vitae vehicula turpis. Pellentesque venenatis, magna non sodales gravida, turpis lectus tincidunt erat, ut convallis metus nunc et diam. Donec malesuada pharetra felis, nec imperdiet erat malesuada nec. Aenean quis purus nibh. Cras ullamcorper varius turpis ac sollicitudin. Morbi semper eros sit amet tortor aliquet pulvinar. Donec odio tortor, venenatis sed felis id, ultrices convallis lorem. Nulla iaculis elit at consectetur mattis. Proin eget sem ut metus tincidunt fringilla. Nunc sollicitudin diam quis placerat tincidunt. Phasellus eu lacinia magna. Aliquam eu lorem vel erat luctus vehicula eget sit amet tortor. Nulla eleifend lectus sit amet elit dapibus, eget varius eros venenatis. Aenean semper dui at gravida feugiat. Nulla in nisl vitae metus volutpat gravida. Etiam luctus est id tellus vulputate, at sagittis urna tristique. Suspendisse sit amet laoreet metus, id ullamcorper odio. Ut neque magna, lacinia eget nisi vel, laoreet pharetra ipsum. In dictum convallis enim vitae aliquet. Cras non turpis efficitur, fermentum erat ac, lobortis nunc. In a ex sed nisi mattis porttitor. Suspendisse justo ligula, sagittis vitae dignissim non, feugiat in diam. Curabitur congue eros sed sem viverra, eu rutrum tortor ultrices. Integer eu dictum nibh. Fusce orci dolor, placerat a rutrum eu, mollis et metus. Sed vestibulum venenatis leo, non laoreet dui dapibus eu. Vestibulum vitae diam odio. Nullam bibendum magna justo, ut tempor est iaculis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum risus libero, sit amet eleifend justo sagittis nec. In nec odio at diam fermentum faucibus. Etiam id sagittis felis. In tempus id lectus nec efficitur. Sed id laoreet dui. Duis vel sollicitudin massa, ac ultrices velit. Nam mattis mollis euismod. In pretium ipsum a lacus hendrerit luctus. Curabitur placerat tellus purus, non mollis arcu varius sed. Maecenas egestas tortor vitae semper pharetra. Sed eget quam nulla. Etiam vitae augue enim. Quisque a varius libero, in molestie augue. Donec scelerisque blandit justo, quis porta sapien tempus sed. Praesent porttitor pulvinar interdum. Maecenas tincidunt ac ex nec facilisis. Vivamus vehicula libero vitae nulla faucibus eleifend. Proin id mi vel felis ultricies pellentesque. Ut lacinia, mi eget egestas vulputate, tortor eros semper odio, quis ultricies quam ligula sit amet urna. Vestibulum sit amet dictum diam. 
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis massa eu dolor tincidunt rhoncus. Morbi et venenatis odio. Suspendisse potenti. Duis mattis tellus ut suscipit ullamcorper. Sed id maximus tellus, vitae vehicula turpis. Pellentesque venenatis, magna non sodales gravida, turpis lectus tincidunt erat, ut convallis metus nunc et diam. Donec malesuada pharetra felis, nec imperdiet erat malesuada nec. Aenean quis purus nibh. Cras ullamcorper varius turpis ac sollicitudin. Morbi semper eros sit amet tortor aliquet pulvinar. Donec odio tortor, venenatis sed felis id, ultrices convallis lorem. Nulla iaculis elit at consectetur mattis. Proin eget sem ut metus tincidunt fringilla. Nunc sollicitudin diam quis placerat tincidunt. Phasellus eu lacinia magna. Aliquam eu lorem vel erat luctus vehicula eget sit amet tortor. Nulla eleifend lectus sit amet elit dapibus, eget varius eros venenatis. Aenean semper dui at gravida feugiat. Nulla in nisl vitae metus volutpat gravida. Etiam luctus est id tellus vulputate, at sagittis urna tristique. Suspendisse sit amet laoreet metus, id ullamcorper odio. Ut neque magna, lacinia eget nisi vel, laoreet pharetra ipsum. In dictum convallis enim vitae aliquet. Cras non turpis efficitur, fermentum erat ac, lobortis nunc. In a ex sed nisi mattis porttitor. Suspendisse justo ligula, sagittis vitae dignissim non, feugiat in diam. Curabitur congue eros sed sem viverra, eu rutrum tortor ultrices. Integer eu dictum nibh. Fusce orci dolor, placerat a rutrum eu, mollis et metus. Sed vestibulum venenatis leo, non laoreet dui dapibus eu. Vestibulum vitae diam odio. Nullam bibendum magna justo, ut tempor est iaculis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum risus libero, sit amet eleifend justo sagittis nec. In nec odio at diam fermentum faucibus. Etiam id sagittis felis. In tempus id lectus nec efficitur. Sed id laoreet dui. Duis vel sollicitudin massa, ac ultrices velit. Nam mattis mollis euismod. In pretium ipsum a lacus hendrerit luctus. Curabitur placerat tellus purus, non mollis arcu varius sed. Maecenas egestas tortor vitae semper pharetra. Sed eget quam nulla. Etiam vitae augue enim. Quisque a varius libero, in molestie augue. Donec scelerisque blandit justo, quis porta sapien tempus sed. Praesent porttitor pulvinar interdum. Maecenas tincidunt ac ex nec facilisis. Vivamus vehicula libero vitae nulla faucibus eleifend. Proin id mi vel felis ultricies pellentesque. Ut lacinia, mi eget egestas vulputate, tortor eros semper odio, quis ultricies quam ligula sit amet urna. Vestibulum sit amet dictum diam. 
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis massa eu dolor tincidunt rhoncus. Morbi et venenatis odio. Suspendisse potenti. Duis mattis tellus ut suscipit ullamcorper. Sed id maximus tellus, vitae vehicula turpis. Pellentesque venenatis, magna non sodales gravida, turpis lectus tincidunt erat, ut convallis metus nunc et diam. Donec malesuada pharetra felis, nec imperdiet erat malesuada nec. Aenean quis purus nibh. Cras ullamcorper varius turpis ac sollicitudin. Morbi semper eros sit amet tortor aliquet pulvinar. Donec odio tortor, venenatis sed felis id, ultrices convallis lorem. Nulla iaculis elit at consectetur mattis. Proin eget sem ut metus tincidunt fringilla. Nunc sollicitudin diam quis placerat tincidunt. Phasellus eu lacinia magna. Aliquam eu lorem vel erat luctus vehicula eget sit amet tortor. Nulla eleifend lectus sit amet elit dapibus, eget varius eros venenatis. Aenean semper dui at gravida feugiat. Nulla in nisl vitae metus volutpat gravida. Etiam luctus est id tellus vulputate, at sagittis urna tristique. Suspendisse sit amet laoreet metus, id ullamcorper odio. Ut neque magna, lacinia eget nisi vel, laoreet pharetra ipsum. In dictum convallis enim vitae aliquet. Cras non turpis efficitur, fermentum erat ac, lobortis nunc. In a ex sed nisi mattis porttitor. Suspendisse justo ligula, sagittis vitae dignissim non, feugiat in diam. Curabitur congue eros sed sem viverra, eu rutrum tortor ultrices. Integer eu dictum nibh. Fusce orci dolor, placerat a rutrum eu, mollis et metus. Sed vestibulum venenatis leo, non laoreet dui dapibus eu. Vestibulum vitae diam odio. Nullam bibendum magna justo, ut tempor est iaculis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum risus libero, sit amet eleifend justo sagittis nec. In nec odio at diam fermentum faucibus. Etiam id sagittis felis. In tempus id lectus nec efficitur. Sed id laoreet dui. Duis vel sollicitudin massa, ac ultrices velit. Nam mattis mollis euismod. In pretium ipsum a lacus hendrerit luctus. Curabitur placerat tellus purus, non mollis arcu varius sed. Maecenas egestas tortor vitae semper pharetra. Sed eget quam nulla. Etiam vitae augue enim. Quisque a varius libero, in molestie augue. Donec scelerisque blandit justo, quis porta sapien tempus sed. Praesent porttitor pulvinar interdum. Maecenas tincidunt ac ex nec facilisis. Vivamus vehicula libero vitae nulla faucibus eleifend. Proin id mi vel felis ultricies pellentesque. Ut lacinia, mi eget egestas vulputate, tortor eros semper odio, quis ultricies quam ligula sit amet urna. Vestibulum sit amet dictum diam. 
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis massa eu dolor tincidunt rhoncus. Morbi et venenatis odio. Suspendisse potenti. Duis mattis tellus ut suscipit ullamcorper. Sed id maximus tellus, vitae vehicula turpis. Pellentesque venenatis, magna non sodales gravida, turpis lectus tincidunt erat, ut convallis metus nunc et diam. Donec malesuada pharetra felis, nec imperdiet erat malesuada nec. Aenean quis purus nibh. Cras ullamcorper varius turpis ac sollicitudin. Morbi semper eros sit amet tortor aliquet pulvinar. Donec odio tortor, venenatis sed felis id, ultrices convallis lorem. Nulla iaculis elit at consectetur mattis. Proin eget sem ut metus tincidunt fringilla. Nunc sollicitudin diam quis placerat tincidunt. Phasellus eu lacinia magna. Aliquam eu lorem vel erat luctus vehicula eget sit amet tortor. Nulla eleifend lectus sit amet elit dapibus, eget varius eros venenatis. Aenean semper dui at gravida feugiat. Nulla in nisl vitae metus volutpat gravida. Etiam luctus est id tellus vulputate, at sagittis urna tristique. Suspendisse sit amet laoreet metus, id ullamcorper odio. Ut neque magna, lacinia eget nisi vel, laoreet pharetra ipsum. In dictum convallis enim vitae aliquet. Cras non turpis efficitur, fermentum erat ac, lobortis nunc. In a ex sed nisi mattis porttitor. Suspendisse justo ligula, sagittis vitae dignissim non, feugiat in diam. Curabitur congue eros sed sem viverra, eu rutrum tortor ultrices. Integer eu dictum nibh. Fusce orci dolor, placerat a rutrum eu, mollis et metus. Sed vestibulum venenatis leo, non laoreet dui dapibus eu. Vestibulum vitae diam odio. Nullam bibendum magna justo, ut tempor est iaculis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum risus libero, sit amet eleifend justo sagittis nec. In nec odio at diam fermentum faucibus. Etiam id sagittis felis. In tempus id lectus nec efficitur. Sed id laoreet dui. Duis vel sollicitudin massa, ac ultrices velit. Nam mattis mollis euismod. In pretium ipsum a lacus hendrerit luctus. Curabitur placerat tellus purus, non mollis arcu varius sed. Maecenas egestas tortor vitae semper pharetra. Sed eget quam nulla. Etiam vitae augue enim. Quisque a varius libero, in molestie augue. Donec scelerisque blandit justo, quis porta sapien tempus sed. Praesent porttitor pulvinar interdum. Maecenas tincidunt ac ex nec facilisis. Vivamus vehicula libero vitae nulla faucibus eleifend. Proin id mi vel felis ultricies pellentesque. Ut lacinia, mi eget egestas vulputate, tortor eros semper odio, quis ultricies quam ligula sit amet urna. Vestibulum sit amet dictum diam. 
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis massa eu dolor tincidunt rhoncus. Morbi et venenatis odio. Suspendisse potenti. Duis mattis tellus ut suscipit ullamcorper. Sed id maximus tellus, vitae vehicula turpis. Pellentesque venenatis, magna non sodales gravida, turpis lectus tincidunt erat, ut convallis metus nunc et diam. Donec malesuada pharetra felis, nec imperdiet erat malesuada nec. Aenean quis purus nibh. Cras ullamcorper varius turpis ac sollicitudin. Morbi semper eros sit amet tortor aliquet pulvinar. Donec odio tortor, venenatis sed felis id, ultrices convallis lorem. Nulla iaculis elit at consectetur mattis. Proin eget sem ut metus tincidunt fringilla. Nunc sollicitudin diam quis placerat tincidunt. Phasellus eu lacinia magna. Aliquam eu lorem vel erat luctus vehicula eget sit amet tortor. Nulla eleifend lectus sit amet elit dapibus, eget varius eros venenatis. Aenean semper dui at gravida feugiat. Nulla in nisl vitae metus volutpat gravida. Etiam luctus est id tellus vulputate, at sagittis urna tristique. Suspendisse sit amet laoreet metus, id ullamcorper odio. Ut neque magna, lacinia eget nisi vel, laoreet pharetra ipsum. In dictum convallis enim vitae aliquet. Cras non turpis efficitur, fermentum erat ac, lobortis nunc. In a ex sed nisi mattis porttitor. Suspendisse justo ligula, sagittis vitae dignissim non, feugiat in diam. Curabitur congue eros sed sem viverra, eu rutrum tortor ultrices. Integer eu dictum nibh. Fusce orci dolor, placerat a rutrum eu, mollis et metus. Sed vestibulum venenatis leo, non laoreet dui dapibus eu. Vestibulum vitae diam odio. Nullam bibendum magna justo, ut tempor est iaculis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum risus libero, sit amet eleifend justo sagittis nec. In nec odio at diam fermentum faucibus. Etiam id sagittis felis. In tempus id lectus nec efficitur. Sed id laoreet dui. Duis vel sollicitudin massa, ac ultrices velit. Nam mattis mollis euismod. In pretium ipsum a lacus hendrerit luctus. Curabitur placerat tellus purus, non mollis arcu varius sed. Maecenas egestas tortor vitae semper pharetra. Sed eget quam nulla. Etiam vitae augue enim. Quisque a varius libero, in molestie augue. Donec scelerisque blandit justo, quis porta sapien tempus sed. Praesent porttitor pulvinar interdum. Maecenas tincidunt ac ex nec facilisis. Vivamus vehicula libero vitae nulla faucibus eleifend. Proin id mi vel felis ultricies pellentesque. Ut lacinia, mi eget egestas vulputate, tortor eros semper odio, quis ultricies quam ligula sit amet urna. Vestibulum sit amet dictum diam. 
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis massa eu dolor tincidunt rhoncus. Morbi et venenatis odio. Suspendisse potenti. Duis mattis tellus ut suscipit ullamcorper. Sed id maximus tellus, vitae vehicula turpis. Pellentesque venenatis, magna non sodales gravida, turpis lectus tincidunt erat, ut convallis metus nunc et diam. Donec malesuada pharetra felis, nec imperdiet erat malesuada nec. Aenean quis purus nibh. Cras ullamcorper varius turpis ac sollicitudin. Morbi semper eros sit amet tortor aliquet pulvinar. Donec odio tortor, venenatis sed felis id, ultrices convallis lorem. Nulla iaculis elit at consectetur mattis. Proin eget sem ut metus tincidunt fringilla. Nunc sollicitudin diam quis placerat tincidunt. Phasellus eu lacinia magna. Aliquam eu lorem vel erat luctus vehicula eget sit amet tortor. Nulla eleifend lectus sit amet elit dapibus, eget varius eros venenatis. Aenean semper dui at gravida feugiat. Nulla in nisl vitae metus volutpat gravida. Etiam luctus est id tellus vulputate, at sagittis urna tristique. Suspendisse sit amet laoreet metus, id ullamcorper odio. Ut neque magna, lacinia eget nisi vel, laoreet pharetra ipsum. In dictum convallis enim vitae aliquet. Cras non turpis efficitur, fermentum erat ac, lobortis nunc. In a ex sed nisi mattis porttitor. Suspendisse justo ligula, sagittis vitae dignissim non, feugiat in diam. Curabitur congue eros sed sem viverra, eu rutrum tortor ultrices. Integer eu dictum nibh. Fusce orci dolor, placerat a rutrum eu, mollis et metus. Sed vestibulum venenatis leo, non laoreet dui dapibus eu. Vestibulum vitae diam odio. Nullam bibendum magna justo, ut tempor est iaculis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum risus libero, sit amet eleifend justo sagittis nec. In nec odio at diam fermentum faucibus. Etiam id sagittis felis. In tempus id lectus nec efficitur. Sed id laoreet dui. Duis vel sollicitudin massa, ac ultrices velit. Nam mattis mollis euismod. In pretium ipsum a lacus hendrerit luctus. Curabitur placerat tellus purus, non mollis arcu varius sed. Maecenas egestas tortor vitae semper pharetra. Sed eget quam nulla. Etiam vitae augue enim. Quisque a varius libero, in molestie augue. Donec scelerisque blandit justo, quis porta sapien tempus sed. Praesent porttitor pulvinar interdum. Maecenas tincidunt ac ex nec facilisis. Vivamus vehicula libero vitae nulla faucibus eleifend. Proin id mi vel felis ultricies pellentesque. Ut lacinia, mi eget egestas vulputate, tortor eros semper odio, quis ultricies quam ligula sit amet urna. Vestibulum sit amet dictum diam. 
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis massa eu dolor tincidunt rhoncus. Morbi et venenatis odio. Suspendisse potenti. Duis mattis tellus ut suscipit ullamcorper. Sed id maximus tellus, vitae vehicula turpis. Pellentesque venenatis, magna non sodales gravida, turpis lectus tincidunt erat, ut convallis metus nunc et diam. Donec malesuada pharetra felis, nec imperdiet erat malesuada nec. Aenean quis purus nibh. Cras ullamcorper varius turpis ac sollicitudin. Morbi semper eros sit amet tortor aliquet pulvinar. Donec odio tortor, venenatis sed felis id, ultrices convallis lorem. Nulla iaculis elit at consectetur mattis. Proin eget sem ut metus tincidunt fringilla. Nunc sollicitudin diam quis placerat tincidunt. Phasellus eu lacinia magna. Aliquam eu lorem vel erat luctus vehicula eget sit amet tortor. Nulla eleifend lectus sit amet elit dapibus, eget varius eros venenatis. Aenean semper dui at gravida feugiat. Nulla in nisl vitae metus volutpat gravida. Etiam luctus est id tellus vulputate, at sagittis urna tristique. Suspendisse sit amet laoreet metus, id ullamcorper odio. Ut neque magna, lacinia eget nisi vel, laoreet pharetra ipsum. In dictum convallis enim vitae aliquet. Cras non turpis efficitur, fermentum erat ac, lobortis nunc. In a ex sed nisi mattis porttitor. Suspendisse justo ligula, sagittis vitae dignissim non, feugiat in diam. Curabitur congue eros sed sem viverra, eu rutrum tortor ultrices. Integer eu dictum nibh. Fusce orci dolor, placerat a rutrum eu, mollis et metus. Sed vestibulum venenatis leo, non laoreet dui dapibus eu. Vestibulum vitae diam odio. Nullam bibendum magna justo, ut tempor est iaculis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum risus libero, sit amet eleifend justo sagittis nec. In nec odio at diam fermentum faucibus. Etiam id sagittis felis. In tempus id lectus nec efficitur. Sed id laoreet dui. Duis vel sollicitudin massa, ac ultrices velit. Nam mattis mollis euismod. In pretium ipsum a lacus hendrerit luctus. Curabitur placerat tellus purus, non mollis arcu varius sed. Maecenas egestas tortor vitae semper pharetra. Sed eget quam nulla. Etiam vitae augue enim. Quisque a varius libero, in molestie augue. Donec scelerisque blandit justo, quis porta sapien tempus sed. Praesent porttitor pulvinar interdum. Maecenas tincidunt ac ex nec facilisis. Vivamus vehicula libero vitae nulla faucibus eleifend. Proin id mi vel felis ultricies pellentesque. Ut lacinia, mi eget egestas vulputate, tortor eros semper odio, quis ultricies quam ligula sit amet urna. Vestibulum sit amet dictum diam. 
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis massa eu dolor tincidunt rhoncus. Morbi et venenatis odio. Suspendisse potenti. Duis mattis tellus ut suscipit ullamcorper. Sed id maximus tellus, vitae vehicula turpis. Pellentesque venenatis, magna non sodales gravida, turpis lectus tincidunt erat, ut convallis metus nunc et diam. Donec malesuada pharetra felis, nec imperdiet erat malesuada nec. Aenean quis purus nibh. Cras ullamcorper varius turpis ac sollicitudin. Morbi semper eros sit amet tortor aliquet pulvinar. Donec odio tortor, venenatis sed felis id, ultrices convallis lorem. Nulla iaculis elit at consectetur mattis. Proin eget sem ut metus tincidunt fringilla. Nunc sollicitudin diam quis placerat tincidunt. Phasellus eu lacinia magna. Aliquam eu lorem vel erat luctus vehicula eget sit amet tortor. Nulla eleifend lectus sit amet elit dapibus, eget varius eros venenatis. Aenean semper dui at gravida feugiat. Nulla in nisl vitae metus volutpat gravida. Etiam luctus est id tellus vulputate, at sagittis urna tristique. Suspendisse sit amet laoreet metus, id ullamcorper odio. Ut neque magna, lacinia eget nisi vel, laoreet pharetra ipsum. In dictum convallis enim vitae aliquet. Cras non turpis efficitur, fermentum erat ac, lobortis nunc. In a ex sed nisi mattis porttitor. Suspendisse justo ligula, sagittis vitae dignissim non, feugiat in diam. Curabitur congue eros sed sem viverra, eu rutrum tortor ultrices. Integer eu dictum nibh. Fusce orci dolor, placerat a rutrum eu, mollis et metus. Sed vestibulum venenatis leo, non laoreet dui dapibus eu. Vestibulum vitae diam odio. Nullam bibendum magna justo, ut tempor est iaculis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum risus libero, sit amet eleifend justo sagittis nec. In nec odio at diam fermentum faucibus. Etiam id sagittis felis. In tempus id lectus nec efficitur. Sed id laoreet dui. Duis vel sollicitudin massa, ac ultrices velit. Nam mattis mollis euismod. In pretium ipsum a lacus hendrerit luctus. Curabitur placerat tellus purus, non mollis arcu varius sed. Maecenas egestas tortor vitae semper pharetra. Sed eget quam nulla. Etiam vitae augue enim. Quisque a varius libero, in molestie augue. Donec scelerisque blandit justo, quis porta sapien tempus sed. Praesent porttitor pulvinar interdum. Maecenas tincidunt ac ex nec facilisis. Vivamus vehicula libero vitae nulla faucibus eleifend. Proin id mi vel felis ultricies pellentesque. Ut lacinia, mi eget egestas vulputate, tortor eros semper odio, quis ultricies quam ligula sit amet urna. Vestibulum sit amet dictum diam. 
            </p>

            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            {showModal && modal}
        </div>
    );
}

export default ModalPage;