import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Rating.scss';

const Rating = ({ rating, height, width, fontSize }) => (
    <span className="rating" style={{ width, height }}>
        <em style={{ width, height }}>
            <FaStar style={{ fontSize }} />
            <FaStar style={{ fontSize }} />
            <FaStar style={{ fontSize }} />
            <FaStar style={{ fontSize }} />
            <FaStar style={{ fontSize }} />
        </em>
        <em className="star" style={{ width: `${rating}%`, height }}>
            <strong style={{ width }}>
                <FaStar style={{ fontSize }} />
                <FaStar style={{ fontSize }} />
                <FaStar style={{ fontSize }} />
                <FaStar style={{ fontSize }} />
                <FaStar style={{ fontSize }} />
            </strong>
        </em>
    </span>
);

export default Rating;
