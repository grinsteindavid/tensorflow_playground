import * as tf from '@tensorflow/tfjs-node';

export const multiLinearRegression = async (input: number[]) => {
    const xArray = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];
    const yArray = [1, 1, 1, 1];
    // Create a dataset from the JavaScript array.
    const xDataset = tf.data.array(xArray);
    const yDataset = tf.data.array(yArray);
    // Zip combines the `x` and `y` Datasets into a single Dataset, the
    // iterator of which will return an object containing of two tensors,
    // corresponding to `x` and `y`.  The call to `batch(4)` will bundle
    // four such samples into a single object, with the same keys now pointing
    // to tensors that hold 4 examples, organized along the batch dimension.
    // The call to `shuffle(4)` causes each iteration through the dataset to
    // happen in a different order.  The size of the shuffle window is 4.
    const xyDataset = tf.data
        .zip({ xs: xDataset, ys: yDataset })
        .batch(4)
        .shuffle(4);
    const model = tf.sequential({
        layers: [tf.layers.dense({ units: 1, inputShape: [9] })],
    });
    model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });

    await model.fitDataset(xyDataset, {
        epochs: 4,
        verbose: 0,
    });

    const result = model.predict(tf.tensor(input, [1, 9])) as tf.Tensor;

    return result.data();
};
