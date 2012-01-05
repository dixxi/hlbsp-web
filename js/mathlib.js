/*
 * mathlib.js
 * 
 * Copyright (c) 2012, Bernhard Manfred Gruber. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 * MA 02110-1301  USA
 */

'use strict';

/**
 * Provides basic mathematical routines for vector processing.
 */
 
function Vector3D()
{
	var x;
	var y;
	var z;
}

/**
 * Tests whether or not the given point is in the axis aligned bounding box spaned by mins and maxs.
 *
 * @return Returns true when the point is inside or directly on the box surface.
 */
function pointInBox(point, mins, maxs)
{
    if((mins[0] <= point.x && point.x <= maxs[0] &&
        mins[1] <= point.y && point.y <= maxs[1] &&
        mins[2] <= point.z && point.z <= maxs[2]) ||
       (mins[0] >= point.x && point.x >= maxs[0] &&
        mins[1] >= point.y && point.y >= maxs[1] &&
        mins[2] >= point.z && point.z >= maxs[2]))
        return true;
    else
        return false;
}

function dotProduct(a, b)
{
    return (a.x * b.x) + (a.y * b.y) + (a.z * b.z);
}