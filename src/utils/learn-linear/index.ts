import * as tf from '@tensorflow/tfjs-node';

export const learnLinear = async (input: number[]) => {
    const model = tf.sequential();

    model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
    model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

    const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
    const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

    await model.fit(xs, ys, { epochs: 250, verbose: 0 });
    const result = model.predict(tf.tensor2d(input, [1, 1])) as tf.Tensor;

    return result.data();
};
